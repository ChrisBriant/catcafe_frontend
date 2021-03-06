import {useEffect,useState,useContext} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import {getMonthName} from '../helpers/general';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Calendar = props => {
  const d = new Date();
  const {getBookings,setDay,state:{calMonth,displayCalendar}} = useContext(ApiContext);
  const [month,setMonth] = useState(d.getUTCMonth()+1);
  const [year,setYear] = useState(d.getUTCFullYear());

  useEffect(() => {
    getBookings(year,month);
  },[]);

  const changeMonth = (moveVal) => {
    let newMonth = month + moveVal;
    let newYear = year;
    if(newMonth == 0) {
      newMonth = 12;
      newYear--;
    }
    if(newMonth == 13) {
      newMonth = 1;
      newYear++;
    }
    getBookings(newYear,newMonth);
    setMonth(newMonth);
    setYear(newYear);
  }

  const goToDay = (dateStr) => {
    setDay(dateStr);
  }


  return (
    <>
      <Row>
        <Col md={2}></Col>
        <Col md={1}>
          <button className='cal-skip-btn' onClick={() => changeMonth(-1)}>{'<'}</button>
        </Col>
        <Col md={6}><h2>{getMonthName(month)}, {year}</h2></Col>
        <Col md={1}><button className='cal-skip-btn' onClick={() =>changeMonth(1)}>{'>'}</button></Col>
        <Col md={2}></Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          {
            displayCalendar.map((week) => (
              <Row key={week[0].date}>
              {
                week.map((day) => (
                  <Col className={day.className}  key={day.date} >
                    {
                      day.active
                      ? <>
                        {
                          !day.gone
                          ? <>
                            {
                              day.available
                              ? <>
                                <span className="day-number">{day.day}</span>
                                <button className="book-btn" onClick={() => goToDay(day.dateStr)}>
                                  <span className="day-availability">book now!</span>
                                </button>
                              </>
                              : <>
                                <span className="day-number">{day.day}</span>
                                <span className="day-availability">Fully Booked</span>
                              </>
                            }
                          </>
                          : <>
                            <span className="day-number">{day.day}</span>
                          </>
                        }
                      </>
                      : <>
                        <span className="day-number">{day.day}</span>
                      </>
                    }
                  </Col>
                  ))
                }
              </Row>
            ))
          }
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
}

export default Calendar;
