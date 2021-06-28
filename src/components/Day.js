import {useContext, useState, useEffect} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
//import {transformDayData} from '../helpers/general';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Day = props => {
  const {setTables,state:{day,displayDay}} = useContext(ApiContext);
  const [daySlots,setDaySlots] = useState([]);

  useEffect(() => {

    //setDaySlots(transformDayData(day));
  },[]);

  console.log('DAY',displayDay, day);


  const bookSlot = (slot) => {
    console.log("BOOK SLOT", slot);
    if(!slot.booked) {
      console.log('SLOT IS', day.times[slot.time]);
      setTables({dateStr:day.dateStr,tables:day.times[slot.time]});
    }
  }

  return (
    <>
      <h2>{day.displayDate}</h2>
      <p>{day.available} slots available</p>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          {
            <Row>
              <Col md={4}>
                {
                  displayDay[1].map((slot) => (
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
              <Col md={4}>
                {
                  displayDay[2].map((slot) => (
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
              <Col md={4}>
                {
                  displayDay[3].map((slot) => (
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
            </Row>
          }
        </Col>
        <Col md={4}></Col>
      </Row>
    </>
  );
}

export default Day;
