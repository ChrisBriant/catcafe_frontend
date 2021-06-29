import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {Context as ApiContext} from '../context/ApiContext';

const MessageDialog = props => {
  const [show, setShow] = useState(false);

  const cancelDialog = () => {
    props.cancelDialog();
  }

  const goToBookings = () => {
    console.log('VIEW MY BOOKINGS');
  }


  return (
        <Modal
          show={props.show}
          onHide={cancelDialog}
          dialogClassName="modal-60w"
          >
          <Modal.Header closeButton>
            <Modal.Title className="modal-center">Booking Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <p>{props.message}</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <>
              {
                props.goToBookings
                ? <Button onClick={goToBookings}>
                    View Bookings
                </Button>
                : null
              }
              <Button onClick={cancelDialog}>
                Ok
              </Button>
            </>
          </Modal.Footer>
        </Modal>
  );
}

export default MessageDialog;
