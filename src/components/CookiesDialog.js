import {useState, useContext} from 'react';
import {withRouter} from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Context} from '../context/AuthContext';


import {Context as ApiContext} from '../context/ApiContext';

const CookiesDialog = props => {
  //const [show, setShow] = useState(false);
  const {iAcceptCookies, state:{cookiesAccepted}} = useContext(Context);

  // const cancelDialog = () => {
  //   props.cancelDialog();
  // }

  const goToBookings = () => {
    props.history.push('/mybookings');
  }

  return (
        <Modal
          show={props.show}
          dialogClassName="modal-60w"
          scrollable={true}
          >
          <Modal.Header>
            <Modal.Title className="modal-center">Cookies</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <p>We use a minimal amount of cookies to enchance your experience of this website.
                    Cookies are used to store your session data to reduce the need for logging in repeatedly.
                    No cookies are used for traking purposes and we do not send data to third parties.
                  </p>
                  <p>Please confirm your acceptance of cookies by clicking the "accept" button below.</p>
                  <p>
                    Click <a href="https://www.aboutcookies.org/" target="_blank">here</a> to read more about cookies.
                  </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer className="center-content">
            <>
              <Button onClick={iAcceptCookies}>
                I Accept
              </Button>
            </>
          </Modal.Footer>
        </Modal>
  );
}

export default CookiesDialog;
