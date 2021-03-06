import {useState} from 'react';
import {withRouter} from 'react-router';
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
    props.history.push('/mybookings');
  }

  return (
        <Modal
          show={props.show}
          onHide={cancelDialog}
          dialogClassName="modal-60w"
          >
          <Modal.Header closeButton>
            <Modal.Title className="modal-center">{props.title}</Modal.Title>
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
                props.extraButton
                ? <Button onClick={goToBookings}>
                    {props.buttonText}
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

export default withRouter(MessageDialog);
