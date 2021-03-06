import {useContext, useState, useEffect} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarButton from '../components/CalendarButton';


const Day = props => {
  const {setTables,changeView,state:{day,displayDay}} = useContext(ApiContext);
  const [daySlots,setDaySlots] = useState([]);


  const bookSlot = (slot) => {
    if(!slot.booked) {
      setTables({dateStr:day.dateStr,timeStr:slot,tables:day.times[slot.time]});
    }
  }

  return (
    <>
      <CalendarButton clickAction={() => changeView('calendar')}/>
      <h2>{day.displayDate}</h2>
      <p>{day.available} slots available</p>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
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
        <Col md={3}></Col>
      </Row>
    </>
  );
}

export default Day;
