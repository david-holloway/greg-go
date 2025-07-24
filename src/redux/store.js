import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gregUserReducer from './gregUser';

// Combine reducers (in case you add more in the future)
const rootReducer = combineReducers({
  gregUsers: gregUserReducer,
});

// Create the Redux store with middleware (thunk for async actions)
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;