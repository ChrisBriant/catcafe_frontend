import {useContext} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import BookingCard from './BookingCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spacer from '../components/Spacer';


const BookingsMap = props => {
  const {deleteBooking,clearDeleteSuccess,clearError,getMyBookings,
    state:{deleteSuccess,errorState}} = useContext(ApiContext);

  // const cancelBooking = async (bookingId) => {
  //   console.log('I am cancelling',bookingId);
  //   await deleteBooking({booking_id:bookingId})
  //         .then(res => {
  //             console.log('Get Bookings Now')
  //             getMyBookings();
  //         }
  // }

  return (
    <>
      {
        props.bookings.length > 0
        ? <> {
            props.bookings.map((booking) => (
              <Row key={booking.id}>
                <Col>
                  {
                    <>
                      <BookingCard
                        booking={booking}
                        future={props.future}
                        cancelBooking={props.cancelBooking}
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
            props.future
            ? <Col><p>You do not have any bookings, please click <a href="/book">here</a> to book</p></Col>
            : <Col><p>You do not have any past bookings.</p></Col>
          }

        </Row>
      }
    </>
  );
}

export default BookingsMap;
