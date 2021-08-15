import {useContext,useState} from 'react';
import {withRouter} from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spacer from '../components/Spacer';
import {Context as ApiContext} from '../context/ApiContext';

const Contact = (props) => {
  const {sendContactMessage,clearError,
      state:{errorState,errorMessage, contactSuccess}} = useContext(ApiContext);
  const [bodyText, setBodyText] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeText = (e) => {
    setBodyText(e.target.value);
  }

  const handleSend = async (e) => {
    e.preventDefault();
    const payload = {
      message : bodyText
    }
    await sendContactMessage(payload).then(data => {
      if(data.success) {
        clearError();
        setMessage('Succesfully sent message');
        props.history.push('/home');
      } else {
        setMessage('There was an error sending this message.');
      }
    }).catch(err => {
      setMessage('There was an error sending this message.');
    });
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
        {
          errorState ? <p className="error">{errorMessage}</p> : null
        }
      </div>
    </>
  );
}

export default withRouter(Contact);
