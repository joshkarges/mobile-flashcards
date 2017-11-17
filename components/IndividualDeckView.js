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
      <View style={styles.container}>
        <View>
          <Text>{this.props.title}</Text>
          <Text>{`${this.props.questions.length} cards`}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('NewQuestionView', { deckId: this.props.title })}>
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('QuizView', { deckId: this.props.title })}>
            <Text>Start Quiz</Text>
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