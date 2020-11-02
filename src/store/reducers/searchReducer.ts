
import { SEARCH, SearchState } from '../types'

const initialState: SearchState = { item: 'hello' };

function searchReducer(state = initialState, action: { type: string; payload: string; }):SearchState {
  console.log(action)
  switch (action.type) {
    case SEARCH: {
      console.log(SEARCH);
      return state;
    }
    default:
      return state;
  }
}

export default searchReducer;