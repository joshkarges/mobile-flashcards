import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { addDeck } from '../actions';
import styles from '../utils/styles';
import { TextLine } from './primitives';

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
        <TextLine
          set={(text)=>this.setState({ deckTitleText: text })}
          get={()=>this.state.deckTitleText}
          placeholder='Deck Title'
          autoFocus={true}/>
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