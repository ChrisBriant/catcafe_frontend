import {useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Spacer from '../components/Spacer';
import Calendar from '../components/Calendar';
import {Context} from '../context/AuthContext';



const Booking = () => {
  const {state:{authed}} = useContext(Context);

  console.log("Hello");

  return (
      <>
        <p>Some text</p>
        {
          authed
          ? <>

            <Calendar/>
          </>
          : <>
            <Calendar/>
          </>
        }
      </>
  );
}

export default Booking;
