/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'redux';
import AppRouter from './src/AppRouter';

class App extends Component {
  render () {
    return <AppRouter />;
  }
}
export default App;

//api: http://api.openweathermap.org/data/2.5/find?units=metric&appid=e88e9c6575924c79cc61585a79e039a1&q=
