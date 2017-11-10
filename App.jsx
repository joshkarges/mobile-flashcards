import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigator';

const DeckTabs = TabNavigator.create({
  DeckListView: {
    screen: DeckListView
  },
  NewDeckView: {
    screen: NewDeckView
  }
});

const MainNavigator = StackNavigator.create({
  Home: {
    screen: DeckTabs
  },
  IndividualDeckView: {
    screen: IndividualDeckView
  },
  QuizView: {
    screen: QuizView
  },
  NewQuestionView: {
    screen: NewQuestionView
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
