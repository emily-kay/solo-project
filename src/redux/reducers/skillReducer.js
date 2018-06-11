import { combineReducers } from 'redux';
import axios from 'axios';

const skillList = {
  Charismatic: 0,
  Courageous: 0,
  Flexible: 0,
  Hardworking: 0,
  Insightful: 0,
  Intelligent: 0,
  Patient: 0,
  Persuasive: 0,
  Responsible: 0,
  Strong: 0,
  Selfless: 0,
  Wise: 0,
  allCount: 50,
}

const skillReducer = (state = skillList, action) => {
  if (action.type === 'SKILL_ADDED' && state.allCount !== 0) {
    return {...state, allCount: state.allCount - 1, [action.property]: action.payload};
  }else if(action.type === 'SKILL_MINUSED' && state.allCount !== 50){
    return {...state, allCount: state.allCount + 1, [action.property]: action.payload};
  }else if (action.type === 'SKILL_POST'){
    for (let key in state) {
      axios({
        method: 'POST',
        url: `/api/skills`,
        data: {skill:key, count:state[key]}
      })
        .then((response) => {
          console.log('Something right POST client-side',response);
        })
        .catch((error) => {
          console.log('Something wrong POST client-side', error);
        })
    }
  }
  return state; // return next state
}

export default combineReducers({
    skillReducer,
  });