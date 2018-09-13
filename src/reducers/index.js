import { combineReducers } from 'redux';

import contatos from './contatos';
import LoginReducer from './LoginReducer';

const Reducers = combineReducers({
  contatos,
  LoginReducer
});

export default Reducers;