import { getAsyncActionCreators } from './util';
import * as storage from '../utils/storage';

export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const {
  ATTEMPTING_GET_ALL_DECKS,
  SUCCESS_GET_ALL_DECKS,
  FAILURE_GET_ALL_DECKS,
  getAllDecks
} = getAsyncActionCreators(GET_ALL_DECKS, storage.getDecks);

export const ADD_DECK = 'ADD_DECK';
export const {
  ATTEMPTING_ADD_DECK,
  SUCCESS_ADD_DECK,
  FAILURE_ADD_DECK,
  addDeck
} = getAsyncActionCreators(ADD_DECK, storage.addDeck)

export const ADD_CARD = 'ADD_CARD';
export const {
  ATTEMPTING_ADD_CARD,
  SUCCESS_ADD_CARD,
  FAILURE_ADD_CARD,
  addCard
} = getAsyncActionCreators(ADD_CARD, storage.addCardToDeck)