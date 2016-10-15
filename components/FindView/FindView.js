import React, { Component } from 'react';
import { View } from 'react-native';
import QRCodeScreen from '../../lib/QRCodeScreen';
import Styles from '../../Styles';

export default class FindView extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <QRCodeScreen/>
      </View>
    )
  }
}