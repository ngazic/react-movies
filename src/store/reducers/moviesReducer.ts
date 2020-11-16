
import { GET_TOP_MOVIES, MovieAction, Items } from '../types'

const initialState: Items[] = []

function moviesReducer(state = initialState, action: MovieAction): Items[] {
  console.log('movies reducer')
  switch (action.type) {
    case GET_TOP_MOVIES: {
      return action.payload
    }
    default:
      return state;
  }
}

export default moviesReducer;