import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const BookingCard = props => {

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
                     <button className="book-btn" onClick={() => cancelBooking(table.booking_id)}>Cancel Booking</button>
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
