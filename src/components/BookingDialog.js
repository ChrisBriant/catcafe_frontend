import {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';

import {Context as ApiContext} from '../context/ApiContext';

const BookingDialog = props => {
  const {makeBooking} = useContext(ApiContext);
  const [show, setShow] = useState(false);

  const cancelDialog = () => {
    props.cancelDialog();
  }

  const bookTable = () => {
    console.log('BOOK HERE');
    let dateForBooking = `${props.bookingDate.getDate()}/${props.bookingDate.getMonth()}/${
                            props.bookingDate.getFullYear()} ${props.bookingDate.getHours()}:${props.bookingDate.getMinutes()}`;
    console.log('I AM BOOKING', dateForBooking);

    makeBooking(
      {
        date: dateForBooking,
        table: props.tableNo
      }
    )
  }

  const formattedDate = moment(props.bookingDate).format('LL');
  console.log('MAKE BOOKING ON',formattedDate);



  return (
        <Modal
          show={props.show}
          onHide={cancelDialog}
          dialogClassName="modal-60w"
          >
          <Modal.Header closeButton>
            <Modal.Title className="modal-center">Make a Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <p>{`Do you want to book table ${props.tableNo} on
                   ${formattedDate}?`}</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={cancelDialog}>
              Cancel
            </Button>
            <Button onClick={bookTable}>
              Book Now
            </Button>
          </Modal.Footer>
        </Modal>
  );
}

export default BookingDialog;
