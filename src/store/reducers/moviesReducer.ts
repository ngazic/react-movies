
import { GET_TOP_MOVIES, Movies, SearchAction } from '../types'

const initialState: Movies[] = []

function moviesReducer(state = initialState, action: SearchAction): Movies[] {
  console.log(action)
  switch (action.type) {
    case GET_TOP_MOVIES: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default moviesReducer;