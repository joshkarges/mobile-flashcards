import { combineReducers } from 'redux';
import { getAttemptingReducer, getFailureReducer } from './util';
import {
  GET_ALL_DECKS,
  SUCCESS_GET_ALL_DECKS,
  ADD_DECK,
  SUCCESS_ADD_DECK,
  ADD_CARD,
  SUCCESS_ADD_CARD
} from '../actions';

const reducerMap = {
  [SUCCESS_GET_ALL_DECKS]: (state, data) => data,
  [SUCCESS_ADD_DECK]: (state, data) => ({
    ...state,
    ...data
  }),
  [SUCCESS_ADD_CARD]: (state, data) => {
    // console.log('success add card ', data);
    return {
      ...state,
      ...data
    };
  }
};

function decks(state={}, { type, data }) {
  // console.log('  REDUCER ', type, data);
  return reducerMap[type] ? reducerMap[type](state, data) : state;
}

export default combineReducers({
  decks,
  isLoading: getAttemptingReducer(GET_ALL_DECKS),
  failure: getFailureReducer(GET_ALL_DECKS)
})