import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './Style'

export default class HomeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hi!</Text>
        <Text style={styles.welcome}>Get Ready to Navigate!</Text>
      </View>
    )
  }
}