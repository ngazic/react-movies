
import { Items, SEARCH, SearchAction, SET_SEARCH_ERROR } from '../types'

const initialState: Items[] = []

function searchReducer(state = initialState, action: SearchAction): Items[] {
  switch(action.type) {
    case SEARCH: {
    return action.payload
  }
    case SET_SEARCH_ERROR: {
    return []
  }
    default:
  return state;
}
}

export default searchReducer;