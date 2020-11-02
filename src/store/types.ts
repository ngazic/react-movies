export const SEARCH = 'SEARCH';

export interface SearchFor {
  type: typeof SEARCH;
  payload: string;
}

interface SearchItems {
  item: string;
}

export type SearchState = SearchItems;
export type SearchAction = SearchFor;