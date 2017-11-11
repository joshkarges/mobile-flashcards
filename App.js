import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { TabNavigator, StackNavigator } from 'react-navigation';
import reducer from './reducers'
import DeckListView from './DeckListView';
import IndividualDeckView from './IndividualDeckView';
import QuizView from './QuizView';
import NewDeckView from './NewDeckView';
import NewQuestionView from './NewQuestionView';

const DeckTabs = TabNavigator({
  Home: {
    screen: DeckListView,
    title: 'Decks'
  },
  NewDeckView: {
    screen: NewDeckView
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckTabs,
    title: 'Home'
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
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={styles.container}>
          <Text>Home</Text>
          <MainNavigator />
        </View>
      </Provider>
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
