import React from 'react';
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { AppLoading} from 'expo'
import { getAllDecks } from './actions';

class DeckListView extends React.Component {
  state = {
    decks: {}
  }
  componentDidMount() {
    this.props.dispatch(getAllDecks())
  }
  render() {
    if (this.props.isLoading) return <AppLoading/>;
    return (
      <View>
        <Text>DeckListView</Text>
        <Text>DeckListView</Text>
        <Text>DeckListView</Text>
        <Text>DeckListView</Text>
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
  return {...state};
};

export default connect(mapStateToProps)(DeckListView);