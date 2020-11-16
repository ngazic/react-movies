
import { Items, SEARCH, SearchAction, SET_SEARCH_ERROR } from '../types'

const initialState: Items[] = []

function searchReducer(state = initialState, action: SearchAction): Items[] {
  console.log('search reducer')
  console.log(action)
  switch(action.type) {
    case SEARCH: {
    console.log(SEARCH);
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