import React, { Component } from 'react';
import { View,
TextInput,
 StyleSheet } from 'react-native';

class Main extends Component {
  state= {name: ''}

  onChangeText = name => this.setState({name})

  render() {
    return <View >
              <TextInput
              style={styles.nameinput}
              placeHolder="Dio Brando"
              value={this.state.name}
              onChangeText={this.onChangeText}
              />
          </View>;
  }
}
1
const offset= 24;
const styles = StyleSheet.create({
  nameinput:{
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  }
});

export default Main;
