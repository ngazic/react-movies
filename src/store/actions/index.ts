import { ThunkAction } from 'redux-thunk'
import { SearchAction, TopMoviesDataResonse, MovieAction, ShowsAction, GET_TOP_SHOWS, GET_TOP_MOVIES, SEARCH, SET_ERROR, SET_SEARCH_ERROR } from '../types'
import { RootState } from '../index'
import API from '../../API-helper'

export const getSearchItems = (query: string, category: string): ThunkAction<void, RootState, null, SearchAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`${API.apiBasePath}/search/${category}?api_key=${API.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1`)
      if (!res.ok || query.trim() === '') {
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

export const getTopMovies = (): ThunkAction<void, RootState, null, MovieAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`${API.apiBasePath}/movie/top_rated?api_key=${API.REACT_APP_API_KEY}&language=en-US&page=1`)
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
      const res = await fetch(`${API.apiBasePath}/tv/top_rated?api_key=${API.REACT_APP_API_KEY}&language=en-US&page=1`)
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