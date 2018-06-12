import { combineReducers } from 'redux';
import axios from 'axios';

const traitList = {
    Absentminded: false,
    Aggressive: false,
    Anxious: false,
    Arrogant: false,
    Blunt: false,
    Calm: false,
    Competitive: false,
    Confident: false,
    Cooperative: false,
    Crude: false,
    Curious: false,
    Cynical: false,
    Daring: false,
    Deceptive: false,
    Dedicated: false,
    Determined: false,
    Distractible: false,
    Egocentric: false,
    Forgetful: false,
    Gentle: false,
    Genuine: false,
    Greedy: false,
    Honest: false,
    Humble: false,
    Humourous: false,
    Idealistic: false,
    Impatient: false,
    Insecure: false,
    Jaded: false,
    Just: false,
    Lazy: false,
    Logical: false,
    Loyal: false,
    Narissistic: false,
    Ordinary: false,
    Organized: false,
    Paranoid: false,
    Predictable: false,
    Protective: false,
    Rational: false,
    Reliable: false,
    Secure: false,
    Sensitive: false,
    Sophisticated: false,
    Spontaneous: false,
    Stubborn: false,
    Superficial: false,
    Thoughtful: false,
    Unpredicatable: false,
    Weird: false,
  }
  
  const traitReducer = (state= traitList, action) => {
    let trait = {trait: action.payload}
    if (action.type === 'POST_TRAIT' && state[action.payload] === false) {
      axios({
        method: 'POST',
        url: '/api/traits',
        data: trait
      }).then((response) => {
        console.log('Success on Traits handleClick')
        
      }).catch((error) => {
        console.log('Error on the traits handleClick:', error);
      });
      return {...state, [action.payload]: true};
    }else if(action.type === 'DELETE_TRAIT' && state[action.payload] === true){
      axios({
        method: 'DELETE',
        url: '/api/traits',
        data: trait
      }).then((response) => {
        console.log('Success on Traits handleClick')
      }).catch((error) => {
        console.log('Error on the traits handleClick:', error);
      });
      return {...state, [action.payload]: false};
    }
    return state; 
  }

  export default combineReducers({
    traitReducer,
  });