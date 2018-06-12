import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import skillReducer from './skillReducer';
import trait from './traitReducer';

import { takeEvery, call, put as dispatch } from 'redux-saga/effects';


const store = combineReducers({
  user,
  login,
  skillReducer,
  trait,
});

export default store;
