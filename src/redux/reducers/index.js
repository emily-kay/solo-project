import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import { takeEvery, call, put as dispatch } from 'redux-saga/effects';

const skillList = {
  charismatic: 0,
  courageous: 0,
  flexible: 0,
  hardworking: 0,
  insightful: 0,
  intelligent: 0,
  patient: 0,
  persuasive: 0,
  responsible: 0,
  strong: 0,
  selfless: 0,
  wise: 0,
  allCount: 50,
}

const skillReducer = (state = skillList, action) => {
  if (action.type === 'SKILL_ADDED' && state.allCount !== 0) {
    return {...state, allCount: state.allCount - 1, [action.property]: action.payload};
  }else if(action.type === 'SKILL_MINUSED' && state.allCount !== 50){
    return {...state, allCount: state.allCount + 1, [action.property]: action.payload};
  }else if (action.type === 'SKILL_POST'){
    console.log('Add client side POST')
  }
  return state; // return next state
}


const store = combineReducers({
  user,
  login,
  skillReducer,
});

export default store;
