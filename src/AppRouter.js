/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import getTemp from '../src/api/getTemp';
class AppRouter extends Component {
  constructor (props) {
    super (props);
    this.state = {
      cityName: '',
      ndo: ''
    };
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Hà Nội hiện tại:</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.cityName}
          onChangeText={text => this.setState ({cityName: text})}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.getTempByCityName.bind (this)}
        >
          <Text style={styles.buttonText}>Lấy nhiệt độ</Text>
        </TouchableOpacity>
      </View>
    );
  }
  getTempByCityName () {
    getTemp(this.state.cityName)
    .then(temp => console.log('Hà Nội hiện tại là:',temp + 'oC'))
    .catch(err => console.log(err))
  }
}
const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 30,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 50,
  },
  buttonText: {
    color: 'white',
  },
  textInput: {
    height: 40,
    margin: 10,
    width: '90%',
    color: 'white',
    padding: 10,
    backgroundColor: 'black',
  },
});
export default AppRouter;

//api: http://api.openweathermap.org/data/2.5/find?units=metric&appid=e88e9c6575924c79cc61585a79e039a1&q=
