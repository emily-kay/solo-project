import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import { takeEvery, call, put as dispatch } from 'redux-saga/effects';


const skillReducer = (state = 50, action) => {
  if (action.type === 'SKILL_ADDED' && state !== 0) {
    return state - 1;
  }else if(action.type === 'SKILL_MINUSED' && state !== 50){
    return state + 1;
  }
  return state; // return next state
}


const store = combineReducers({
  user,
  login,
  skillReducer,
});

export default store;
