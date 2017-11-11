import { getAsyncActionCreators } from './util';
import {
  getDecks,
  getDeck,
  addDeck,
  addCardToDeck
} from '../utils/storage';

export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const {
  ATTEMPTING_GET_ALL_DECKS,
  SUCCESS_GET_ALL_DECKS,
  FAILURE_GET_ALL_DECKS,
  getAllDecks
} = getAsyncActionCreators(GET_ALL_DECKS, getDecks)