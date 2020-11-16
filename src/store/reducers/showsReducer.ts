
import { GET_TOP_SHOWS, ShowsAction, Items } from '../types'

const initialState: Items[] = []

function showsReducer(state = initialState, action: ShowsAction): Items[] {
  console.log('shows reducer')
  switch (action.type) {
    case GET_TOP_SHOWS: {
      console.log(action.payload)
      return action.payload
    }
    default:
      return state;
  }
}

export default showsReducer;