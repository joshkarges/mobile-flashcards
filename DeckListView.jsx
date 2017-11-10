import React from 'react';
import { TouchableOpacity } from 'react-native';
import { getDecks } from './utils/storage';

export default class DeckListView extends React.Component {
  state = {
    decks: {};
  }
  componentDidMount() {
    getDecks()
    .then((decks) => this.setState({ decks }));
  }
  render() {
    return (
      <View>
        {_.map(this.state.decks, (deck, key) => (
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('IndividualDeckView')}>
            <Text>{deck.title}</Text>
            <Text>{`${deck.questions.length} cards`}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}