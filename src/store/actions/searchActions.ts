import { ThunkAction } from 'redux-thunk'
import { SearchAction, TopMoviesDataResonse } from '../types'
import { RootState } from '../index'

export const getSearchItems = (query: string): SearchAction => {
  return {
    type: "SEARCH",
    payload: query
  }
}


export const asyncTest = (message: string): ThunkAction<void, RootState, null, SearchAction> => {
  return async dispatch => {
    await setTimeout(() => {
      console.log(message)
      dispatch({
        type: "TEST",
        payload: message
      })
    }, 10000);
  }
}


export const getTopMovies = (): ThunkAction<void, RootState, null, SearchAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      console.log('fetched res is ')
      console.log(res)
      if(!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
        
      }
      const data: TopMoviesDataResonse = await res.json();
      console.log(data)
      console.log(data.results[0].id)
      dispatch({
        type: "GET_TOP_MOVIES",
        payload: data.results
      })
    } catch(err) {
      dispatch({
        type: "SET_ERROR",
        payload: err
      });
    }
  }
}