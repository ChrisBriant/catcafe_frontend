import createDataContext from './createDataContext';
import {catApiAuth, catApi} from '../api/connections';
//import {transformMonthData} from '../helpers/general';

const defaultState = {
  cats: [],
  calMonth: {}
};

const apiReducer = (state,action) => {

  switch(action.type) {
    case 'add_error':
      return {...state,errorMessage:action.payload};
    case 'getCats':
      return {...state,cats:action.payload};
    case 'setMonth':
      return {...state,calMonth:action.payload};
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
                        });
    } catch (err) {
      console.log(err, err.response);
      dispatch({type:'add_error', payload: 'An issue occured retrieving data'});
    }
}


export const {Provider, Context} = createDataContext (
  apiReducer,
  { getCats,getBookings},
  {...defaultState}
);
