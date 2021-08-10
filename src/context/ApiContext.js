import createDataContext from './createDataContext';
import {catApiAuth, catApi} from '../api/connections';
import {transformMonthData, transformDayData, transformTableData} from '../helpers/general';
import moment from 'moment';

const defaultState = {
  cats: [],
  calMonth: {},
  displayCalendar: [],
  day: {},
  tables: {},
  displayDay: [],
  displayTables: {},
  dayView: false,
  tableView: false,
  bookingMade: false,
  errorState: false,
  errorMessage: '',
  myBookings:[],
  futureBookings:[],
  pastBookings:[],
  deleteSuccess: false,
  contactSuccess: false
};

const apiReducer = (state,action) => {

  switch(action.type) {
    case 'add_error':
      return {...state,errorMessage:action.payload,errorState:true};
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
      let displayTables = transformTableData(action.payload.tables.tables);
      console.log('SET TABLES', displayTables);
      return {...state,tables:action.payload,tableView:true,displayTables:displayTables};
    case 'setBooking':
      return {...state,tableView:false,dayView:false,bookingMade:true};
    case 'clearBooking':
      return {...state,bookingMade:false};
    case 'clearError':
      return {...state,errorState:false,errorMessage:''};
    case 'clearError':
      return {...state,deleteSuccess:false};
    case 'setMyBookings':
      //Partition into two sets of bookings, future and past
      let futureBookings = [];
      let pastBookings = [];

      for(let i=0;i<action.payload.length;i++) {
        const dtNow = new Date();
        const dtChk = new Date(action.payload[i].date_str);
        if(dtChk > dtNow) {
          futureBookings.push(action.payload[i]);
        } else {
          pastBookings.push(action.payload[i]);
        }
      }
      return {...state,myBookings:action.payload,futureBookings,pastBookings};
    case 'afterDelete':
      return {...state,deleteSuccess:true};
    case 'slotView':
      return {...state,dayView:true,tableView:false};
    case 'calendarView':
      return {...state,dayView:false,tableView:false};
    case 'contactSuccess':
      return {...state,contactSuccess:action.payload};
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

const makeBooking = (dispatch) => async (bookingData) => {
  try {
    const response = await catApiAuth.post('/api/makebooking/', bookingData)
                      .then(res => {
                        console.log("success",res.data);
                        dispatch({type:'setBooking', payload:res.data});
                      });
  } catch (err) {
    console.log(err, err.response);
    dispatch({type:'add_error', payload: 'An issue occured making the booking.'});
  }
}

//Clear booking - reset the state variable to clear the dialog
const clearBooking = (dispatch) => () => {
    dispatch({type:'clearBooking', payload: null});
}

//Clear error - clear the error state variable
const clearError = (dispatch) => () => {
    dispatch({type:'clearError', payload: null});
}


//Clear delete success - clear the deletion success status
const clearDeleteSuccess = (dispatch) => () => {
    dispatch({type:'clearDeleteSuccess', payload: null});
}



const getMyBookings = (dispatch) => async () => {
  let success = false;
  let futureBookings = [];
  let pastBookings = [];
  let myBookings = [];

  try {
    const response = await catApiAuth.post('/api/mybookings/')
                      .then(res => {
                        console.log("success",res.data);

                        myBookings = res.data;

                        for(let i=0;i<res.data.length;i++) {
                          const dtNow = new Date();
                          const dtChk = new Date(res.data[i].date_str);
                          if(dtChk > dtNow) {
                            futureBookings.push(res.data[i]);
                          } else {
                            pastBookings.push(res.data[i]);
                          }
                        }
                        //dispatch({type:'setMyBookings', payload:res.data});
                        success = true;
                      });
  } catch (err) {
    console.log(err, err.response);
    dispatch({type:'add_error', payload: 'An issue occured retrieving your bookings.'});
  }
  return {success,myBookings,futureBookings,pastBookings};
}


const deleteBooking = (dispatch) => async (data) => {
  try {
    console.log('data',data);
    const response = await catApiAuth.delete('/api/deletebooking/', {data:data})
                      .then(res => {
                        console.log("success",res.data);
                        dispatch({type:'afterDelete', payload:res.data});
                      });
  } catch (err) {
    console.log(err, err.response);
    dispatch({type:'add_error', payload: 'An issue occured retrieving your bookings.'});
  }
  return true;
}

const changeView = (dispatch) => (view) => {
  switch (view) {
    case 'slots':
      dispatch({type:'slotView', payload:null});
      break;
    case 'calendar':
      dispatch({type:'calendarView', payload:null});
      break;
  }
}

const getMenu = (dispatch) => async () => {
  let success = false;
  let data = {};

  try {
    console.log('data',data);
    const response = await catApi.get('/api/getmenu')
                      .then(res => {
                        console.log("success",res.data);
                        success = true;
                        data = res.data;
                      });
  } catch (err) {
    console.log(err, err.response);
    dispatch({type:'add_error', payload: 'An issue occured retrieving your bookings.'});
  }
  return {success,data};
}


const sendContactMessage = (dispatch) => async (payload) => {
  let success = false;
  console.log('PAYLOAD',payload);
  try {
    const response = await catApi.post('/api/contact',payload)
                      .then(res => {
                        if(res.data.success) {
                          dispatch({type:'contactSuccess', payload: true});
                        }  else {
                          dispatch({type:'add_error', payload: 'An issue occured sending this message.'});
                        }
                        success = true;
                      });
  } catch (err) {
    console.log(err, err.response);
    dispatch({type:'add_error', payload: 'An issue occured sending this message.'});
  }
  return {success};
}


export const {Provider, Context} = createDataContext (
  apiReducer,
  { getCats,getBookings,setDay,setTables,makeBooking,clearBooking,getMenu,
    clearError,clearDeleteSuccess,getMyBookings,deleteBooking, changeView,
    sendContactMessage},
  {...defaultState}
);
