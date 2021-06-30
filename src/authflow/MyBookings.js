import {useState, useContext, useEffect} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const MyBookings = props => {
  const {getMyBookings, state:{myBookings}} = useContext(ApiContext);

  useEffect( () => {
    getMyBookings();
  },[]);

  const bookingInFuture = (date) => {
    const dtNow = new Date();
    const dtChk = new Date(date);
    console.log('FUTURE CHECK',dtChk,dtNow.setDate(dtNow.getDate()-1),
     dtChk > dtNow.setDate(dtNow.getDate()-1) );
    return(dtChk > dtNow.setDate(dtNow.getDate()-1));
  }

  console.log("MY BOOKINGS", myBookings) //, dtNow,booking.date > dtNow.setDate(dtNow.getDate()-1));

  return (
    <>
      <h2>My Bookings</h2>
      {
        myBookings.map((booking) => (
          <Row key={booking.id}>
            <Col>
              {
                bookingInFuture(booking.date_str)
                ? <p>{booking.date}</p>
                : null
              }
            </Col>
          </Row>
        ))
      }
    </>
  )
}


export default MyBookings;
