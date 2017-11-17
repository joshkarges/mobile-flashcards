import React from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Constants } from 'expo';
import reducer from './reducers'
import DeckListView from './components/DeckListView';
import IndividualDeckView from './components/IndividualDeckView';
import QuizView from './components/QuizView';
import NewDeckView from './components/NewDeckView';
import NewQuestionView from './components/NewQuestionView';
import styles from './utils/styles';

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
},
{
  navigationOptions: {
    header: null
  }
});

const MainNavigator = StackNavigator({
  DeckTabs: {
    screen: DeckTabs,
    title: 'Decks',
  },
  IndividualDeckView: {
    screen: IndividualDeckView
  },
  QuizView: {
    screen: QuizView,
    title: 'Quiz'
  },
  NewQuestionView: {
    screen: NewQuestionView,
    title: 'Add New Card'
  }
},
{
  navigationOptions: {
    headerStyle: styles.header,
    headerBackTitleStyle: styles.headerBack,
    headerTitleStyle: styles.headerBack,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={styles.container}>
          <View style={{ backgroundColor: 'lightblue', height: Constants.statusBarHeight }}></View>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}