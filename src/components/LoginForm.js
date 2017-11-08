/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="username or email" underlineColorAndroid='transparent' placeholderTextColor="rgba(255, 255, 255, 0.7)" style={styles.input} />
        <TextInput placeholder="password" secureTextEntry underlineColorAndroid='transparent' placeholderTextColor="rgba(255, 255, 255, 0.7)" style={styles.input} />
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>alert('Congratulation!')}><Text style={styles.button}>LOGIN</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    padding : 15,
  },
  input : {
    height : 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom : 15,
    color : '#fff',
    paddingHorizontal : 10,
  },
  buttonContainer : {
    backgroundColor : '#2980b9',
    paddingVertical : 10,
  },
  button : {
    color : '#fff',
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 15
  }
});
