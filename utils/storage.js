import { AsyncStorage } from 'react-native'

const MOBILE_FLASHCARDS_STORAGE_KEY = 'MobileFlashcards:storage';

// return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  console.log('getting all decks');
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY, (result) => {
    if (result === null) {
      result =  {};
      console.log('initializing deck storage as ', result);
      return AsyncStorage.setItem(MOBILE_FLASHCARDS_STORAGE_KEY, JSON.stringify(result), ()=>result);
    }
    console.log('getting all decks response ', result);
    return result;
  });
}

// take in a single id argument and return the deck associated with that id.
export function getDeck(id) {
  return getDecks()
  .then((decks) => decks[id]);
}

// take in a single title argument and add it to the decks.
export function addDeck(title) {
  console.log('adding deck ', title);
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }), ()=>console.log('hopefully a successful deck addition'));
}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY, ({ result }) => {
    return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_STORAGE_KEY, JSON.stringify({
      [title]: {
        ...result[title],
        questions: result[title].questions.concat(card)
      }
    }));
  })
}