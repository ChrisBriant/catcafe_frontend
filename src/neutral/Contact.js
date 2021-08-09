import {useContext,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spacer from '../components/Spacer';


const Contact = () => {
  const [bodyText, setBodyText] = useState('');

  const handleChangeText = (e) => {
    setBodyText(e.target.value);
  }

  const handleSend = () => {
    console.log("SENDING", bodyText);
  }

  return (
    <>
      <Spacer height="2rem" />
      <div className="panel">
        <h1>Contact</h1>
        <p>Send me a message below:</p>
        <Form onSubmit={handleSend}>
          <Form.Group controlId="formContactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Type a message to send to the website author..." onChange={handleChangeText} required />
          </Form.Group>

          <button className="std-btn" type="submit" >
            Send
          </button>
        </Form>
      </div>
    </>
  );
}

export default Contact;
