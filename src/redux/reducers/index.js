import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import skillReducer from './skillReducer';
import axios from 'axios';
import { takeEvery, call, put as dispatch } from 'redux-saga/effects';

function* rootSaga() {
  yield takeEvery('POST_TRAIT', postTrait)
  yield takeEvery('TRAIT_CHECKED', traitState)
}

function* traitState(action) {
  try {
    this.setState({ boxChecked: action.target.checked });
    yield dispatch({
      type: 'POST_TRAIT',
      payload: this.props.traitId
    })
  } catch (error) { }
}

function* postTrait(action) {
  if (action.payload.boxChecked !== true){
    axios({
      method: 'POST',
      url: '/api/traits',
      data: action.payload.traitId
    }).then((response) => {
      console.log('Success on Traits handleClick')
    }).catch((error) => {
      console.log('Error on the traits handleClick:', error);
    });
  }else {
    console.log('You need to delete')
  }   
}

const store = combineReducers({
  user,
  login,
  skillReducer,
});

export default store;
