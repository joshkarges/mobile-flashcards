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
  render() {
    return (
      <View style={styles.newDeckContainer}>
        <Text style={styles.newDeckTitle}>{'What is the title of your new Deck?'}</Text>
        <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={(evt)=>this.setState({ deckTitleText: evt })}
              value={this.state.deckTitleText} placeholder='Deck Title'/>
        </View>
        <TouchableOpacity style={styles.submitButton} type='submit' onPress={this.addDeckHandler}>
          <Text style={styles.submitButtonText}>Submit</Text>
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