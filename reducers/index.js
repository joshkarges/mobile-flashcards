import { combineReducers } from 'redux';
import { getAttemptingReducer, getFailureReducer } from './util';
import {
  GET_ALL_DECKS,
  SUCCESS_GET_ALL_DECKS
} from '../actions';

const reducerMap = {
  [SUCCESS_GET_ALL_DECKS]: (state, data) => data
};

function decks(state={}, { type, data }) {
  return reducerMap[type] ? reducerMap[type](state, data) : state;
}

export default combineReducers({
  decks,
  isLoading: getAttemptingReducer(GET_ALL_DECKS),
  failure: getFailureReducer(GET_ALL_DECKS)
})