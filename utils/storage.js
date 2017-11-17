import { AsyncStorage } from 'react-native'

const MOBILE_FLASHCARDS_STORAGE_KEY = 'MobileFlashcards:storage';

// return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY, (err, result) => {
    if (result === null) return AsyncStorage.setItem(MOBILE_FLASHCARDS_STORAGE_KEY, JSON.stringify({}))
  });
}

// take in a single id argument and return the deck associated with that id.
export function getDeck({ id }) {
  return getDecks()
  .then((decks) => decks[id]);
}

// take in a single title argument and add it to the decks.
export function addDeck({ title }) {
  const newDeckString = JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  });
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_STORAGE_KEY, newDeckString)
    .then(()=>newDeckString);
}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck({ title, card }) {
  return getDecks()
    .then((result) => {
      // console.log('  STORAGE - add card - got decks ', result, typeof result);
      const decks = JSON.parse(result);
      // console.log('  STORAGE - add card - parsed decks ', title, decks, typeof decks);
      const newCardString = JSON.stringify({
        [title]: {
          ...decks[title],
          questions: decks[title].questions.concat(card)
        }
      });
      // console.log('  STORAGE - add card - modified deck ', newCardString)
      return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_STORAGE_KEY, newCardString)
        .then(()=>newCardString);
  });
}

export function removeAllDecks() {
  return AsyncStorage.removeItem(MOBILE_FLASHCARDS_STORAGE_KEY)
    .then(()=>getDecks());
}