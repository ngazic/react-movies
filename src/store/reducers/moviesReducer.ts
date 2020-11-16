
import { GET_TOP_MOVIES, MovieAction, Items } from '../types'

const initialState: Items[] = []

function moviesReducer(state = initialState, action: MovieAction): Items[] {
  switch (action.type) {
    case GET_TOP_MOVIES: {
      return action.payload.slice(0,10)
    }
    default:
      return state;
  }
}

export default moviesReducer;