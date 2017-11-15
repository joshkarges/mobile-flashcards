import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { addDeck } from './actions';

class NewDeckView extends React.Component {
  state = {
    deckTitleText: 'Deck Title'
  }
  addDeckHandler = (evt) => {
    let str = this.state.deckTitleText;
    if (!str) return;
    this.props.navigation.navigate('DeckListView');
    this.props.addDeck(str);
  }
  getTextInput = () => (
    <TextInput style={{
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      margin: 1
    }} onChangeText={(evt)=>this.setState({ deckTitleText: evt })} value={this.state.deckTitleText}/>
  )
  render() {
    return (
      <View>
        <Text style={{
          textAlign: 'center',
          fontSize: 50
        }}>{'What is the title of your new Deck?'}</Text>
        {this.getTextInput()}
        <TouchableOpacity type='submit' onPress={this.addDeckHandler}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {...state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (title) => dispatch(addDeck(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);