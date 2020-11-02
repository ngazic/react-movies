
import { ThunkAction } from 'redux-thunk';
import { SearchAction, SearchError, SearchData, GET_SEARCH_TERM, SET_SEARCH_ERROR } from '../types';
import { RootState } from '../store'

export const searchFor = (term: string): ThunkAction<void, RootState, null, SearchAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${process.env.REACT_APP_API_KEY}`);

      if(!res.ok) {
        const resData: SearchError = await res.json();
        throw new Error(resData.message);
      }

      const resData = await res.json();
      return dispatch({
        type: GET_SEARCH_TERM,
        payload: resData
      });
    }catch(err) {
      return dispatch({
        type: SET_SEARCH_ERROR,
        payload: err.message
      });
    }
  }
}
