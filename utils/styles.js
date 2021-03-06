import { StyleSheet, Text, View, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    margin: 10
  },
  textInput: {
    flex: 1,
    fontSize: 20
  },
  deckListElement: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    height: 150
  },
  deckListElementTitle: {
    fontSize: 36
  },
  deckTitle: {
    fontSize: 36
  },
  deckContainer: {
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  individualDeckContainer: {
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  individualDeckSection: {
    alignItems: 'center',
  },
  individualDeckButton: {
    padding: 5,
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'black',
  },
  individualDeckStartQuizButton: {
    backgroundColor: 'black'
  },
  individualDeckStartQuizButtonText: {
    color: 'white',
  },
  individualDeckButtonText: {
    fontSize: 20
  },
  newDeckContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  newDeckTitle: {
    textAlign: 'center',
    fontSize: 50,
    marginHorizontal: 10,
    marginVertical: 30
  },
  submitButton: {
    padding: 5,
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'black'
  },
  submitButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  newCardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  newCardText: {
    fontSize: 30
  },
  QuizContainer: {
    flex: 1,
  },
  QuizCounter: {
    margin: 5,
    fontSize: 24
  },
  QuizContent: {
    flex: 1,
    alignItems: 'center',
  },
  QuizQuestionAnswer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  QuizText: {
    fontSize: 50,
    textAlign: 'center',
  },
  QuizFlipText: {
    color: 'red',
    fontWeight: 'bold'
  },
  QuizButtonsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  QuizButton: {
    padding: 5,
    margin: 10,
    borderRadius: 5,
    width: 200
  },
  QuizButtonCorrect: {
    backgroundColor: 'green'
  },
  QuizButtonIncorrect: {
    backgroundColor: 'red'
  },
  QuizButtonRestart: {
    backgroundColor: 'black'
  },
  QuizButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  header: {
  },
  headerBack: {
  },
});

export default styles;