import {useEffect,useState,useContext} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import {transformMonthData} from '../helpers/general';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Calendar = props => {
  const d = new Date();
  const {getBookings,state:{calMonth,displayCalendar}} = useContext(ApiContext);
  const [month,setMonth] = useState(d.getUTCMonth()+1);
  const [year,setYear] = useState(d.getUTCFullYear());
  //const [displayCalendar, setDisplayCalendar] = useState([]);

  useEffect(() => {
    getBookings(year,month);
  },[]);

  console.log('hello',displayCalendar);


  return (
    <>
      {
        displayCalendar.map((week) => (
          <Row key={week[0].date}>
          {
            week.map((day) => (
              day.active
              ? <>
                {
                  !day.gone
                  ? <>
                    {
                      day.available
                      ? <Col className="active-day" key={day.date} >
                        <span className="day-number">{day.day}</span>
                        <button className="book-btn">
                          <span className="day-availability">{day.available} spaces</span>
                          <span className="day-availability">book now!</span>
                        </button>
                      </Col>
                      : <Col className="active-day"  key={day.date} >
                        <span className="day-number">{day.day}</span>
                        <span className="day-availability">Fully Booked</span>
                      </Col>
                    }
                  </>
                  : <Col className="inactive-day"  key={day.date} >
                    <span className="day-number">{day.day}</span>
                    <span className="day-availability">Fully Booked</span>
                  </Col>
                }
              </>
              : <Col className="inactive-day"  key={day.date} >
                <span className="day-number">{day.day}</span>
              </Col>
            ))
          }
          </Row>
        ))
      }
    </>
  );
}

export default Calendar;
