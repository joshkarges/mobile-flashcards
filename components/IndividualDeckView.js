import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../utils/styles';

class IndividualDeckView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deckId
    };
  }
  render() {
    return (
      <View style={[styles.container, styles.individualDeckContainer]}>
        <View style={styles.individualDeckSection}>
          <Text style={styles.deckTitle}>{this.props.title}</Text>
          <Text>{`${this.props.questions.length} cards`}</Text>
        </View>
        <View style={styles.individualDeckSection}>
          <TouchableOpacity style={styles.individualDeckButton} onPress={()=>this.props.navigation.navigate('NewQuestionView', { deckId: this.props.title })}>
            <Text style={styles.individualDeckButtonText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.individualDeckButton, styles.individualDeckStartQuizButton]} onPress={()=>this.props.navigation.navigate('QuizView', { deckId: this.props.title })}>
            <Text style={[styles.individualDeckButtonText, styles.individualDeckStartQuizButtonText]}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { deckId } = props.navigation.state.params;
  // console.log('remapping IndividualDeckView ', deckId, state.decks[deckId]);
  return {
    ...state.decks[deckId]
  };
};

export default connect(mapStateToProps)(IndividualDeckView);