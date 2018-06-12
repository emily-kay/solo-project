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
    if (action.type === 'ADD_BASE') {
        return { ...state, ...action.payload };
    } else if (action.type === 'POST_BASE') {
        axios({
            method: 'POST',
            url: `/api/base`,
            data: state,
        })
            .then((response) => {
                console.log('Something right POST client-side', response);
            })
            .catch((error) => {
                console.log('Something wrong POST client-side', error);
            })

    }
    return state;
}

export default combineReducers({
    baseReducer,
});