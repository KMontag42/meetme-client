import React, { Component } from 'react';
import {
  View,
  TouchableHighlight
} from 'react-native';
import QRCodeScreen from '../../lib/QRCodeScreen';
import Styles from '../../Styles';

export default class FindView extends Component {
  onSuccess(barcode) {
    alert(barcode);
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={Styles.container}>
        <QRCodeScreen onSuccess={() => this.onSuccess()} />
        <TouchableHighlight onPress={}>

        </TouchableHighlight>
      </View>
    )
  }
}