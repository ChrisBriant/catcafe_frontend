import {useEffect,useState,useContext} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import {transformMonthData} from '../helpers/general';

const Calendar = props => {
  const d = new Date();
  const {getBookings,state:{calMonth}} = useContext(ApiContext);
  const [month,setMonth] = useState(d.getUTCMonth()+1);
  const [year,setYear] = useState(d.getUTCFullYear());

  useEffect( () => {
    getBookings(year,month);
  },[]);

  console.log('hello',calMonth);
  transformMonthData(year,month);

  return (
    <></>
  );
}

export default Calendar;
