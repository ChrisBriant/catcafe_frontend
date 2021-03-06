import {useState} from 'react';
import {withRouter} from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {Context as ApiContext} from '../context/ApiContext';

const TermsDialog = props => {
  const [show, setShow] = useState(false);

  const cancelDialog = () => {
    props.cancelDialog();
  }

  return (
        <Modal
          show={props.show}
          onHide={cancelDialog}
          dialogClassName="modal-60w"
          scrollable={true}
          >
          <Modal.Header closeButton>
            <Modal.Title className="modal-center">Terms and Conditions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <p>Welcome to our website. Please note that this is a demonstration website and does not represent a real company.</p>
                  <p>All content found on the site is fictional and any resemblance to real life concepts, places or people is purely conincidental.</p>
                  <p>If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Catcafe's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>The use of this website is subject to the following terms of use:</p>
                  <ul>
                   <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                   <li>This website uses cookies to monitor browsing preferences.</li>
                   <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                   <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
                   <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                   <li>All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
                   <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
                   <li>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
                   <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.</li>
                  </ul>

                  <h3>Data Storage</h3>

                  <p>This website uses a registration system to allow you to experience additional features, for example use of the forum. A minimal amount of personal data is stored to make this possible.</p>

                  <ul>
                  <li><strong>Email Address: </strong> We store your email address for registration purposes only, it is not shown to other users, excluding administrators of the site. We do not use
                  your email address to send any information other than required for registration. It is not shared with third parties.</li>
                  <li><strong>Name: </strong> Registration requires a name, this should not be your real name, just a "handle"/"nickname"/"alias" for yourself which is used to refer to you as an individual on the
                  website. This will appear on the forums and is made public.</li>
                  </ul>

                  <h3>Cancellation and suspension of account</h3>

                  <p>We may:</p>

                  <ul>
                  <li>suspend your account;</li>
                  <li>cancel your account; and/or</li>
                  <li>edit your account details,</li>
                  </ul>

                  <p>at any time in our sole discretion without notice or explanation.</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer className="center-content">
            <>
              <Button onClick={cancelDialog}>
                Ok
              </Button>
            </>
          </Modal.Footer>
        </Modal>
  );
}

export default TermsDialog;
