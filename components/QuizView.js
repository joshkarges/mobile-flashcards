import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../utils/styles';

class QuizView extends React.Component {
  state = {
    cardIdx: 0,
    flipped: false,
    numCorrect: 0
  }
  render() {
    const { cardIdx, flipped, numCorrect } = this.state;
    const { questions } = this.props;
    if (cardIdx >= questions.length) {
      const percentCorrect = Math.round(100 * numCorrect/questions.length);
      const punctuation = percentCorrect > 50 ? '!' : ' :\\';
      return (
        <View>
          <Text>{`You got ${percentCorrect}% correct${punctuation}`}</Text>
          <TouchableOpacity onPress={()=>this.setState({ cardIdx: 0, flipped: false, numCorrect: 0 })}>
            <Text>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }
    const card = questions[cardIdx];
    return (
      <View style={styles.container}>
        <Text>{`${cardIdx + 1}/${questions.length}`}</Text>
        <View>
          <Text>{flipped ? card.answer : card.question}</Text>
          <TouchableOpacity onPress={()=>this.setState({ flipped: !flipped })}>
            <Text>{flipped ? 'Question' : 'Answer'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.setState({ numCorrect: numCorrect + 1, cardIdx: cardIdx + 1, flipped: false })}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.setState({ cardIdx: cardIdx + 1, flipped: false })}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const mapStateToProps = (state, props) => {
  const deckId = props.navigation.state.params.deckId;
  // console.log('remapping QuizView ', deckId, state.decks[deckId]);
  return {
    ...state.decks[deckId]
  }
}

export default connect(mapStateToProps)(QuizView)