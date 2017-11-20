import React from 'react';
import { connect } from 'react-redux'
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { AppLoading} from 'expo'
import { getAllDecks, removeAllDecks } from '../actions';
import styles from '../utils/styles';

class DeckListView extends React.Component {
  componentDidMount() {
    this.props.getAllDecks()
  }
  render() {
    if (this.props.isLoading) return <AppLoading/>;
    return (
      <ScrollView style={styles.container}>
        {_.map(this.props.decks, (deck, key) => (
          <TouchableOpacity style={styles.deckListElement} onPress={()=>this.props.navigation.navigate('IndividualDeckView', {deckId: key})} key={key}>
            <Text style={styles.deckListElementTitle}>{deck.title}</Text>
            <Text>{`${deck.questions.length} cards`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, props) => {
  // console.log('remapping DeckListView ', state);
  return {...state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDecks: () => dispatch(getAllDecks()),
    removeAllDecks: () => dispatch(removeAllDecks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);