import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { addDeck } from '../actions';
import styles from '../utils/styles';

class NewDeckView extends React.Component {
  state = {
    deckTitleText: null
  }
  addDeckHandler = (evt) => {
    let str = this.state.deckTitleText;
    if (!str) return;
    this.props.navigation.navigate('DeckListView');
    this.props.addDeck(str);
  }
  getTextInput = () => (
    <TextInput
      style={styles.textInput}
      onChangeText={(evt)=>this.setState({ deckTitleText: evt })}
      value={this.state.deckTitleText} placeholder='Deck Title'/>
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
  // console.log('remapping NewDeckView');
  return {...state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (title) => dispatch(addDeck({ title }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);