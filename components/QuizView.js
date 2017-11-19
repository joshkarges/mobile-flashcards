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
        <View style={styles.QuizContent}>
          <Text style={styles.QuizText}>{`You got ${percentCorrect}% correct${punctuation}`}</Text>
          <TouchableOpacity style={[styles.QuizButton, styles.QuizButtonRestart]} onPress={()=>this.setState({ cardIdx: 0, flipped: false, numCorrect: 0 })}>
            <Text style={styles.QuizButtonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }
    const card = questions[cardIdx];
    return (
      <View style={styles.QuizContainer}>
        <Text style={styles.QuizCounter}>{`${cardIdx + 1}/${questions.length}`}</Text>
        <View style={styles.QuizContent}>
          <View style={styles.QuizQuestionAnswer}>
            <Text style={styles.QuizText}>{flipped ? card.answer : card.question}</Text>
            <TouchableOpacity onPress={()=>this.setState({ flipped: !flipped })}>
              <Text style={styles.QuizFlipText}>{flipped ? 'Question' : 'Answer'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.QuizButtonsContainer}>
            <TouchableOpacity style={[styles.QuizButton, styles.QuizButtonCorrect]} onPress={()=>this.setState({ numCorrect: numCorrect + 1, cardIdx: cardIdx + 1, flipped: false })}>
              <Text style={styles.QuizButtonText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.QuizButton, styles.QuizButtonIncorrect]} onPress={()=>this.setState({ cardIdx: cardIdx + 1, flipped: false })}>
              <Text style={styles.QuizButtonText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
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