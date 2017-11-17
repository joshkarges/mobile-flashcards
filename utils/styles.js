import { StyleSheet, Text, View, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
    margin: 10
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
  header: {
  },
  headerBack: {
  },
});

export default styles;