import React from 'react';
import { TextInput } from 'react-native';
import styles from '../../utils/styles';

class TextInput extends React.Component {
  state = {
    inputText: null
  }
  render() {
    return (
      <TextInput
        style={styles.textInput}
        onChangeText={(text)=>this.setState({ inputText: text })}
        value={this.state.inputText} placeholder=this.props.placeholder/>
    );
  }
}

export default TextInput;