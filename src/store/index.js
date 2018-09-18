import { createStore, applyMiddleware } from 'redux';
import Reducers from './../reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import history from '../routes/history';

const middlewares = [
  thunk,
  routerMiddleware(history)
]
const store = createStore(
  connectRouter(history)(Reducers),
  applyMiddleware(...middlewares))

export default store;