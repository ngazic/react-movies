import { SearchAction } from '../types'

export const getSearchItems = (query: string): SearchAction => {
  return {
    type: "SEARCH",
    payload: query
  }
}
