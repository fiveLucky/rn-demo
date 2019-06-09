/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry, Text, View } from 'react-native';

import styles from './style';

export default class a extends Component {
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
      </View>
    );
  }
}


AppRegistry.registerComponent('a', () => a);
