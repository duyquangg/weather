/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchErorr, fetchSuccess, startFetchData } from '../src/redux/actionCreators';
import getTemp from '../src/api/getTemp';

function mapStateToProps(state) {
  return {
    cityName: state.cityName,
    temp: state.temp,
    error: state.error,
    isLoading: state.isLoading
  }
}
class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.cityName === 'Em' ? <Text >asdasdds</Text> :
          <Text style={styles.message}>{this.getWeatherMessage()}</Text>
        }
        <TextInput
          style={styles.textInput}
          value={this.state.cityName}
          onChangeText={text => this.setState({ cityName: text })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.getTempByCityName.bind(this)}
        >
          <Text style={styles.buttonText}>Lấy nhiệt độ</Text>
        </TouchableOpacity>
      </View>
    );
  }
  getWeatherMessage() {
    const { error, isLoading, cityName, temp } = this.props;
    if (isLoading) return '...Loading';
    if (error) return 'Vui lòng thử lại';
    if (!cityName) return 'Nhập tên thành phố của bạn!';
    return `${cityName} hiện tại là ${temp}oC`

  }
  getTempByCityName() {
    const { cityName } = this.state;
    this.props.startFetchData()
    getTemp(cityName)
      .then(temp => this.props.fetchSuccess(cityName, temp))
      .catch(() => this.props.fetchErorr())
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 25,
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
export default connect(mapStateToProps, { startFetchData, fetchErorr, fetchSuccess })(AppRouter);

//api: http://api.openweathermap.org/data/2.5/find?units=metric&appid=e88e9c6575924c79cc61585a79e039a1&q=
