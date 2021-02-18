import createDataContext from './createDataContext';
import tvApi from '../api/tvsmashupapi';
//import {navigate} from '../navigationRef';

const defaultState = {
  smashups: [],
  shows: [],
  showVs: { show1 : {}, show2 : {}},
  BASEURL: 'http://localhost:8000'
};

const smashUpReducer = (state,action) => {
  let newShows;

  switch(action.type) {
    case 'setSmashups':
      return {...state,smashups:action.payload};
    case 'setShows':
      return {...state,shows:action.payload};
    case 'setShow':
      newShows = state.showVs;
      newShows[`show${action.payload.vsIndex}`] = action.payload;
      // if(action.payload.vsIndex === 1) {
      //   newShows.show1 = action.payload;
      // } else {
      //   newShows.show2 = action.payload;
      // }
      return {...state,showVs:newShows};
    case 'clearShows':
      return {...state,shows:[]};
    default:
      return defaultState;
  }
};


const getSmashups = (dispatch) => async () => {
  const response = await tvApi.get('/api/allsmashups/')
                    .then(res => {
                      console.log("success",res.data);
                      dispatch({type:'setSmashups', payload:res.data});
                    });
}

const searchShows = (dispatch) => async (searchStr) => {
  const response = await tvApi.get('/api/searchshows/?search='+searchStr)
                    .then(res => {
                      console.log("success",res.data);
                      dispatch({type:'setShows', payload:res.data});
                    });
}

const setShow = (dispatch) => async (show) => {
  dispatch({type:'setShow', payload:show});
}

const clearShows = (dispatch) => async () => {
  dispatch({type:'clearShows', payload:null});
}

export const {Provider, Context} = createDataContext (
  smashUpReducer,
  { getSmashups, searchShows, setShow, clearShows },
  {...defaultState}
  //{smashups: [], shows: [], show: {}, BASEURL: 'http://localhost:8000' }
);