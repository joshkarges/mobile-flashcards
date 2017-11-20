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
    const deckTitle = this.state.deckTitleText;
    if (!deckTitle) return;
    this.props.addDeck(deckTitle)
      .then(()=>{
        this.setState({ deckTitleText: null });
        this.props.navigation.navigate('DeckListView');
        this.props.navigation.navigate('IndividualDeckView', {deckId: deckTitle});
      });
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
          <Text style={styles.submitButtonText}>Create Deck</Text>
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