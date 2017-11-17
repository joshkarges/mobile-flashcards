import React from 'react';
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { AppLoading} from 'expo'
import { getAllDecks, removeAllDecks } from '../actions';

class DeckListView extends React.Component {
  componentDidMount() {
    this.props.getAllDecks()
  }
  render() {
    if (this.props.isLoading) return <AppLoading/>;
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={this.props.removeAllDecks}>
          <Text>DeckListView</Text>
        </TouchableOpacity>
        {_.map(this.props.decks, (deck, key) => (
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('IndividualDeckView', {deckId: key})} key={key}>
            <Text>{deck.title}</Text>
            <Text>{`${deck.questions.length} cards`}</Text>
          </TouchableOpacity>
        ))}
      </View>
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