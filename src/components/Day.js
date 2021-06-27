import {useContext, useState, useEffect} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
//import {transformDayData} from '../helpers/general';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Day = props => {
  const {state:{day,displayDay}} = useContext(ApiContext);
  const [daySlots,setDaySlots] = useState([]);

  useEffect(() => {

    //setDaySlots(transformDayData(day));
  },[]);

  console.log('DAY',displayDay);

  const bookSlot = (slot) => {
    console.log("BOOK SLOT", slot);
  }

  return (
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
        {
          displayDay.map((slot) => (
            <div key={slot.time} className={slot.className} onClick={() => bookSlot(slot) }>
              <span className="booking-time">{slot.time}</span>
              { !slot.booked
                ? <span className="booking-text">Click here to book</span>
                : null
              }
            </div>
          ))
        }
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}

export default Day;
