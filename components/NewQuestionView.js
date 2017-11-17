import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { addCard } from '../actions';
import styles from '../utils/styles';

class NewQuestionView extends React.Component {
  state = {
    questionText: null,
    answerText: null
  }
  addCardHandler = (evt) => {
    if (!this.state.questionText || !this.state.answerText) return;
    const newCard = {
      question: this.state.questionText,
      answer: this.state.answerText
    }
    this.props.navigation.navigate('IndividualDeckView', { deckId: this.props.deckId });
    this.props.addCard(newCard);
  }
  render() {
    return (
      <View>
        <Text>NewQuestionView</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text)=>this.setState({ questionText: text })}
          value={this.state.questionText}/>
        <TextInput
          style={styles.textInput}
          onChangeText={(text)=>this.setState({ answerText: text })}
          value={this.state.answerText}/>
        <TouchableOpacity type='submit' onPress={this.addCardHandler}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  const deckId = props.navigation.state.params.deckId;
  // console.log('remapping NewQuestionView ', deckId);
  return {
    deckId
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const title = props.navigation.state.params.deckId
  return {
    addCard: (card) => dispatch(addCard({ title, card }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionView);