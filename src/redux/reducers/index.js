import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import power from './powerReducer';
import skillReducer from './skillReducer';
import trait from './traitReducer';

import { takeEvery, call, put as dispatch } from 'redux-saga/effects';


const store = combineReducers({
  user,
  login,
  power,
  skillReducer,
  trait,
});

export default store;
