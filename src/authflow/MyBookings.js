import {useState, useContext, useEffect} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import BookingsMap from '../components/BookingsMap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spacer from '../components/Spacer';
import MessageDialog from '../components/MessageDialog';

const MyBookings = props => {
  const {getMyBookings,clearDeleteSuccess,clearError,deleteBooking,
    state:{deleteSuccess,errorState,errorMessage}}
    = useContext(ApiContext);

  const [myBookings, setMyBookings] = useState([]);
  const [futureBookings, setFutureBookings] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);
  const [loaded,setLoaded] = useState(false);
  const [future,setFuture] = useState(true);
  const [timeWord,setTimeWord] = useState('past');

  useEffect(async () => {
    await getMyBookings()
          .then(res => {
            if(res.success) {
              setMyBookings(res.myBookings);
              setFutureBookings(res.futureBookings);
              setPastBookings(res.pastBookings);
            }
            setLoaded(true);
          });
  },[]);

  const changeFuturePast = () => {
    if(future) {
      setTimeWord('');
      setFuture(false);
    } else {
      setTimeWord('past');
      setFuture(true);
    }
  }

  const cancelBooking = async (bookingId) => {
    await deleteBooking({booking_id:bookingId})
          .then( async res => {
              await getMyBookings()
                    .then(res => {
                      if(res.success) {
                        setMyBookings(res.myBookings);
                        setFutureBookings(res.futureBookings);
                        setPastBookings(res.pastBookings);
                      }
                      setLoaded(true);
                    })
          });

  }

  return (
    <>
      <MessageDialog
        show={deleteSuccess}
        cancelDialog={clearDeleteSuccess}
        message="Booking Deleted"
        title="Your booking has been deleted successfully."
      />
      <MessageDialog
        show={errorState}
        cancelDialog={clearError}
        message={errorMessage}
        title="Error"
      />
      <h2>My Bookings</h2>
      <p>Sessions last for 30 minutes.</p>
      <Row>
        <Col>
          {
            future
            ? <button className="std-btn" onClick={changeFuturePast}>Show Past Bookings</button>
            : <button className="std-btn" onClick={changeFuturePast}>Show Bookings</button>
          }

        </Col>
      </Row>
      <Spacer height="1rem"/>
      {
        loaded
        ? <>
          {
            future
            ? <BookingsMap
                future={future}
                bookings={futureBookings}
                cancelBooking={cancelBooking}
              />
            : <BookingsMap
                future={future}
                bookings={pastBookings}
                cancelBooking={cancelBooking}
              />
          }
        </>
        : <p>Loading...</p>
      }
      <Spacer height="1rem"/>
    </>
  )
}


export default MyBookings;
