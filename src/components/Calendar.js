import {useEffect,useState,useContext} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import {transformMonthData} from '../helpers/general';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Calendar = props => {
  const d = new Date();
  const {getBookings,state:{calMonth}} = useContext(ApiContext);
  const [month,setMonth] = useState(d.getUTCMonth()+1);
  const [year,setYear] = useState(d.getUTCFullYear());
  const [displayCalendar, setDisplayCalendar] = useState([]);

  useEffect( async () => {
    await getBookings(year,month);
    console.log(calMonth);
    setDisplayCalendar(transformMonthData(year,month,calMonth));
  },[]);

  console.log('hello',displayCalendar);


  return (
    <>
      {
        displayCalendar.map((week) => (
          <Row>
            {
              week.map((day) => (
                day.active
                ? <Col className="active-day">
                  <span className="day-number">{day.day}</span>
                  <button className="book-btn">
                    <span className="day-availability">{day.available} spaces</span>
                    <span className="day-availability">book now!</span>
                  </button>
                </Col>
                : <Col className="inactive-day">
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
