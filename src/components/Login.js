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
  Image
} from 'react-native';

import LoginForm from './LoginForm';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../images/Octocat.png')} />
          <Text style={styles.title}>An app made for GitHub using React Native.</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    flex: 1
  },
  logoContainer : {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo : {
    width : 100,
    height : 100
  },
  title : {
    margin : 10,
    color: '#fff',
    width : 160,
    textAlign: 'center',
    opacity : 0.9,
  }
});
