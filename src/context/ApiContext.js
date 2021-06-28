import createDataContext from './createDataContext';
import {catApiAuth, catApi} from '../api/connections';
import {transformMonthData, transformDayData} from '../helpers/general';
import moment from 'moment';

const defaultState = {
  cats: [],
  calMonth: {},
  displayCalendar: [],
  day: {},
  tables: {},
  displayDay: [],
  dayView: false,
  tableView: false
};

const apiReducer = (state,action) => {

  switch(action.type) {
    case 'add_error':
      return {...state,errorMessage:action.payload};
    case 'getCats':
      return {...state,cats:action.payload};
    case 'setMonth':
      return {...state,calMonth:action.payload};
    case 'setDisplayCalendar':
      return {...state,displayCalendar:action.payload};
    case 'setDay':
      let day = state.calMonth[action.payload];
      day.dateStr = action.payload;
      //Format it to a more display friendly date using moment
      let displayDate = moment(day.dateStr).format('LL');
      day.displayDate  = displayDate;
      return {...state,day:day,dayView:true,displayDay:transformDayData(day)};
    case 'setTables':
      return {...state,tables:action.payload,tableView:true};
    default:
      return defaultState;
  }
};


const getCats = (dispatch) => async () => {
  try {
    const response = await catApi.get('/api/cats/')
                      .then(res => {
                        console.log("success",res.data);
                        dispatch({type:'getCats', payload:res.data});
                      });
    } catch (err) {
      console.log(err, err.response);
      dispatch({type:'add_error', payload: 'An issue occured retrieving data'});
    }
}

const getBookings = (dispatch) => async (year,month) => {
    try {
      const response = await catApi.get(`/api/getslotsformonth?year=${year}&month=${month}`)
                        .then(res => {
                          console.log("success",res.data);
                          dispatch({type:'setMonth', payload:res.data});
                          dispatch({type:'setDisplayCalendar',
                                    payload:transformMonthData(year,month,res.data)});
                        });
    } catch (err) {
      console.log(err, err.response);
      dispatch({type:'add_error', payload: 'An issue occured retrieving data'});

    }

}

const setDay = (dispatch) => (dateStr) => {
  console.log('DAY');
  dispatch({type:'setDay', payload: dateStr});
}

const setTables = (dispatch) => (tableData) => {
  dispatch({type:'setTables', payload: tableData});
}


export const {Provider, Context} = createDataContext (
  apiReducer,
  { getCats,getBookings,setDay,setTables},
  {...defaultState}
);
