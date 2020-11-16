import { ThunkAction } from 'redux-thunk'
import { SearchAction, TopMoviesDataResonse, MovieAction, ShowsAction, GET_TOP_SHOWS, GET_TOP_MOVIES, SEARCH, SET_ERROR, SET_SEARCH_ERROR } from '../types'
import { RootState } from '../index'

export const getSearchItems = (query: string, category:string): ThunkAction<void, RootState, null, SearchAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/search${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1`)
      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);

      }
      const data: TopMoviesDataResonse = await res.json();
      dispatch({
        type: SEARCH,
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: SET_SEARCH_ERROR,
        payload: err
      });
    }
  }
}


// export const asyncTest = (message: string): ThunkAction<void, RootState, null, SearchAction> => {
//   return async dispatch => {
//     await setTimeout(() => {
//       console.log(message)
//       dispatch({
//         type: "TEST",
//         payload: message
//       })
//     }, 10000);
//   }
// }


export const getTopMovies = (): ThunkAction<void, RootState, null, MovieAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);

      }
      const data: TopMoviesDataResonse = await res.json();
      dispatch({
        type: GET_TOP_MOVIES,
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err
      });
    }
  }
}

export const getTopShows = (): ThunkAction<void, RootState, null, ShowsAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);

      }
      const data: TopMoviesDataResonse = await res.json();
      dispatch({
        type: GET_TOP_SHOWS,
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err
      });
    }
  }
}