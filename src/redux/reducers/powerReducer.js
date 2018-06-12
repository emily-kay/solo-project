import { combineReducers } from 'redux';
import axios from 'axios';

const powerList = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
  }
  
  const powerReducer = (state= powerList, action) => {
    let power = {power: action.payload}
    if (action.type === 'POST_POWER' && state[action.property] === false) {
      axios({
        method: 'POST',
        url: '/api/powers',
        data: power
      }).then((response) => {
        console.log('Success on Powers handleClick')
        
      }).catch((error) => {
        console.log('Error on the Powers handleClick:', error);
      });
      return {...state, [action.property]: true};
    }else if(action.type === 'DELETE_POWER' && state[action.property] === true){
      axios({
        method: 'DELETE',
        url: '/api/powers',
        data: power
      }).then((response) => {
        console.log('Success on Powers handleClick')
      }).catch((error) => {
        console.log('Error on the Powers handleClick:', error);
      });
      return {...state, [action.property]: false};
    }
    return state; 
  }

  export default combineReducers({
    powerReducer,
  });