

import React, { Component } from 'react';

import {
  AppRegistry, Text, View, Button, Alert,
} from 'react-native';

import styles from './style';


export default class a extends Component {
  onPress() {
    Alert.alert('hello!');
  }

  onChange = () => { }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello word!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,
          {' '}
          {' '}
          {' '}
          {'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button
          onPress={this.onPress}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('a', () => a);
