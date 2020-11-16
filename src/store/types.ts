export const SEARCH = 'SEARCH';
export const GET_TOP_MOVIES = 'GET_TOP_MOVIES';
export const GET_TOP_SHOWS = 'GET_TOP_SHOWS';
export const SET_ERROR = 'SET_ERROR';
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR';

export interface SearchFor {
  type: typeof SEARCH;
  payload: Items[];
}

export interface GetTopMovies {
  type: typeof GET_TOP_MOVIES,
  payload: Items[]
}

export interface GetTopShows {
  type: typeof GET_TOP_SHOWS,
  payload: Items[]
}

export interface SetError {
  type: typeof SET_ERROR,
  payload: string;
}

export interface SetSearchError {
  type: typeof SET_SEARCH_ERROR,
  payload: string;
}

interface SearchItems {
  item: string;
}

export interface Items {
  id: number;
  adult: boolean;
  title?: string;
  name?: string;
  poster_path: string;
  overview: string;
}


export interface TopMoviesDataResonse {
  results: Items[]
}

export type SearchState = SearchItems;
export type SearchAction = SearchFor | SetSearchError;
export type MovieAction = GetTopMovies | SetError;
export type ShowsAction = GetTopShows | SetError;