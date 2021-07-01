import {useState, useContext, useEffect} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import BookingCard from '../components/BookingCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spacer from '../components/Spacer';
import MessageDialog from '../components/MessageDialog';

const MyBookings = props => {
  const {getMyBookings,deleteBooking,clearDeleteSuccess,clearError,
    state:{myBookings,futureBookings,pastBookings,deleteSuccess,
      errorState}}
    = useContext(ApiContext);
  const [bookings,setBookings] = useState([]);
  const [future,setFuture] = useState(true);
  const [timeWord,setTimeWord] = useState('past');
  const [loaded,setLoaded] = useState(false);

  useEffect( async () => {
    await getMyBookings()
          .then(res => {
              console.log('Render Now',futureBookings,res);
              setBookings(futureBookings);
              setLoaded(true);
            }
          );
  },[]);

  const changeFuturePast = () => {
    if(future) {
      setBookings(pastBookings);
      setTimeWord('');
      setFuture(false);
    } else {
      setBookings(futureBookings);
      setTimeWord('past');
      setFuture(true);
    }
  }

  const cancelBooking = (bookingId) => {
    console.log('I am cancelling',bookingId);
    deleteBooking({booking_id:bookingId});
  }

  console.log("MY BOOKINGS", myBookings, pastBookings,futureBookings,loaded);

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
        message="Error Deleting"
        title="An error occured deleting the booking."
      />

      <h2>My Bookings</h2>
      <p>Sessions last for 30 minutes.</p>

          <Row>
            <Col>
              {
                future
                ? <Button onClick={changeFuturePast}>Show Past Bookings</Button>
                : <Button onClick={changeFuturePast}>Show Bookings</Button>
              }

            </Col>
          </Row>
          <Spacer height="1rem"/>
          {
            loaded
            ? <>
            {
              futureBookings.length > 0
              ? <> {
                  bookings.map((booking) => (
                    <Row key={booking.id}>
                      <Col>
                        {
                          <>
                            <BookingCard
                              booking={booking}
                              future={future}
                              cancelBooking={cancelBooking}
                            />
                            <Spacer height="1rem"/>
                          </>
                        }
                      </Col>
                    </Row>

                  ))
                }
              </>
              : <Row>
                {
                  future
                  ? <Col><p>You do not have any bookings, please click <a href="/book">here</a> to book.</p></Col>
                  : <Col><p>You do not have any past bookings.</p></Col>
                }

              </Row>
            }
            </>
            : <p>Loading</p>
          }
    </>
  )
}


export default MyBookings;

/*
const bookingInFuture = (date) => {
  const dtNow = new Date();
  const dtChk = new Date(date);
  console.log('FUTURE CHECK',dtChk,dtNow,
   dtChk > dtNow); //.setDate(dtNow.getDate()-1) );
  return(dtChk > dtNow);
}


<>
  <h2>My Bookings</h2>
  <p>Sessions last for 30 minutes.</p>
  {
    myBookings.map((booking) => (
      <Row key={booking.id}>
        <Col>
          {
            bookingInFuture(booking.date_str)
            ? <BookingCard
              booking={booking}
            />
            : null
          }
        </Col>
      </Row>
    ))
  }
</>
*/
