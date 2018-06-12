import { combineReducers } from 'redux';
import axios from 'axios';

const baseList = {
    firstName: '',
    lastName: '',
    superName: '',
    homeTown: '',
    values: '',
    goals: '',
    backstory: '',
    weapons: '',
    vehicles: '',
    lairs: '',
    teammates: '',
    loves: '',
    enemies: '',
}

const baseReducer = (state = baseList, action) => {
    if (action.type === 'ADD_BASE'){
        return {...state, [action.property]: action.payload};
    }
    return state;
}

export default combineReducers({
    baseReducer,
  });