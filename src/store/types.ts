export const SEARCH = 'SEARCH';
export const GET_TOP_MOVIES = 'GET_TOP_MOVIES';
export const SET_ERROR = 'SET_ERROR';
export const TEST = 'TEST';

export interface SearchFor {
  type: typeof SEARCH;
  payload: string;
}

export interface GetTopMovies {
  type:typeof GET_TOP_MOVIES,
  payload:Movies[]
}

export interface SetError {
  type:typeof SET_ERROR,
  payload:string;
}

export interface Test {
  type: typeof TEST;
  payload: string;
}

interface SearchItems {
  item: string;
}

export interface Movies {
  id: number;
  adult: boolean;
  title: string;
  poster_path: string;
}

export interface TopMoviesDataResonse {
 results: Movies[]
}

export type SearchState = SearchItems;
export type SearchAction = SearchFor | Test | GetTopMovies | SetError;