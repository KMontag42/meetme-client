import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Styles from './Style';

export default class AccountView extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          hi
        </Text>
      </View>
    )
  }
}