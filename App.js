/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './src/AppRouter';
import store from './src/redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
export default App;

//api: http://api.openweathermap.org/data/2.5/find?units=metric&appid=e88e9c6575924c79cc61585a79e039a1&q=
