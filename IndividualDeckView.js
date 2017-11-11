import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

class IndividualDeckView extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>{this.props.title}</Text>
          <Text>{`${deck.questions.length} cards`}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.props.navigation.navigate('NewQuestionView')}>
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.navigation.navigate('QuizView')}>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { deckId } = props.navigation.state.params;
  return {
    ...state[deckId]
  };
};

export default connect(mapStateToProps)(IndividualDeckView);