import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';

const skillReducer = (state = 50, action) => {
  if (action.type === 'SKILL_CHANGED') {
    console.log('skillReducer', action);
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
