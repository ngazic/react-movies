import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import searchReducer from './reducers/searchReducer';

const middleware = [thunk];

const rootReducer = combineReducers({
  search: searchReducer
})

const store = createStore(rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;