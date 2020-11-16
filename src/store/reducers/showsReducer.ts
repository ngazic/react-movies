
import { GET_TOP_SHOWS, ShowsAction, Items } from '../types'

const initialState: Items[] = []

function showsReducer(state = initialState, action: ShowsAction): Items[] {
  switch (action.type) {
    case GET_TOP_SHOWS: {
      return action.payload.slice(0,10)
    }
    default:
      return state;
  }
}

export default showsReducer;