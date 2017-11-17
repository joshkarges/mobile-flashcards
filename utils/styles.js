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
  }
});

export default styles;