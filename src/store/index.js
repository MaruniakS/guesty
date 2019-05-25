import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

const initialState = {};
// const enhancers = [];
const middleware = [
  thunk
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composed = composeEnhancers(
    applyMiddleware(...middleware),
);

const store = createStore(
    rootReducer,
    initialState,
    composed
);

export default store;
