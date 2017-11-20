import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { addCard } from '../actions';
import styles from '../utils/styles';
import { TextLine } from './primitives';

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
    this.props.navigation.goBack();
    this.props.addCard(newCard);
  }
  render() {
    return (
      <View style={styles.newCardContainer}>
        <Text style={styles.newCardText}>Add New Card</Text>
        <TextLine
          set={(text)=>this.setState({ questionText: text })}
          get={()=>this.state.questionText}
          placeholder='Question'
          multiline={true}
          numberOfLines={3}
          autoFocus={true}/>
        <TextLine
          set={(text)=>this.setState({ answerText: text })}
          get={()=>this.state.answerText}
          placeholder='Answer'/>
        <TouchableOpacity style={styles.submitButton} type='submit' onPress={this.addCardHandler}>
          <Text style={styles.submitButtonText}>Create Card</Text>
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