import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../../utils/styles';

class TextLine extends React.Component {
  state = {
    inputText: null
  }
  render() {
    const {get, set, placeholder} = this.props
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={set}
          value={get()}
          placeholder={placeholder}
          {...this.props}/>
      </View>
    );
  }
}

export default TextLine;