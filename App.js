import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
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
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Constants } from 'expo';

const DeckTabs = TabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    }
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='add-box' size={30} color={tintColor} />
    }
  }
});

const MainNavigator = StackNavigator({
  DeckTabs: {
    screen: DeckTabs,
    title: 'Decks'
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
          <View style={{ backgroundColor: 'purple', height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={'purple'} />
          </View>
          <DeckTabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
