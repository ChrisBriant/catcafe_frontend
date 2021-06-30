import {useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const BookingCard = props => {
  useEffect( () => {
    //Proccess the booking data to present on card
    console.log(props.booking);
  },[]);

  const getDisplayDate = (dateStr) => {
    return moment(dateStr).format('LLLL');
  }

  const cancelBooking = (id) => {
    props.cancelBooking(id);
  }

  return (
    <Card>
      <Card.Header>{getDisplayDate(props.booking.date_str)}</Card.Header>
      <Card.Body>
        {
          props.booking.table_set.map((table) => (
            <Row key={table.booking_id}>
              <Col>
                <p>Table {table.table_number}</p>
              </Col>
              {
                props.future
                ?  <Col>
                     <Button onClick={() => cancelBooking(table.booking_id)}>Cancel Booking</Button>
                  </Col>
                : null
              }


            </Row>
          ))
        }
      </Card.Body>
    </Card>
  );
}

export default BookingCard;
