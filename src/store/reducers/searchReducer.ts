
const initialState = { title: 'hello' };

function searchReducer(state=initialState, action: {type:string; payload: string;}) {
  console.log('search reducer is here')
  console.log(action)
  return initialState;
}

export default searchReducer;