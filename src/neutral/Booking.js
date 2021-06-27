import {useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Spacer from '../components/Spacer';
import Calendar from '../components/Calendar';
import Day from '../components/Day';
import {Context} from '../context/AuthContext';
import {Context as ApiContext} from '../context/ApiContext';



const Booking = () => {
  const {state:{authed}} = useContext(Context);
  const {state:{dayView}} = useContext(ApiContext);

  console.log("Hello");

  return (
      <>
        <p>Some text</p>
        {
          authed
          ? <>
            {
              !dayView
              ? <Calendar/>
              : <Day/>
            }
          </>
          : <>
            <Calendar/>
          </>
        }
      </>
  );
}

export default Booking;
