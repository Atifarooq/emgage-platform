import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// configure middlewares
const middlewares = [thunk];
// compose enhancers
const enhancer = compose(applyMiddleware(...middlewares));

// state on app start
const initialState = {};

// create store
const store = createStore(rootReducer(), initialState, enhancer);

// export store singleton instance
export default store;
