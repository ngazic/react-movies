export const GET_SEARCH_TERM = 'GET_SEARCH_TERM';
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR';


export interface SearchData {
  message: string;
}

export interface SearchError {
  cod: string;
  message: string;
}

interface GetSearchTermAction {
  type: typeof GET_SEARCH_TERM;
  payload: string;
}

interface SetSearchErrorAction {
  type: typeof SET_SEARCH_ERROR;
  payload: SearchData;
}

export type SearchAction = GetSearchTermAction | SetSearchErrorAction