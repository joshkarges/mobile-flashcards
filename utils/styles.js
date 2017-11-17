import { StyleSheet, Text, View, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 1
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
    // backgroundColor: 'white'
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
  header: {
  },
  headerBack: {
  },
});

export default styles;