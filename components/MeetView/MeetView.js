/**
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './Style';
import qrcode from '../../lib/qrcode'

export default class MeetView extends Component {
  static propTypes = {
    selected: React.PropTypes.array
  }
  constructor() {
    super();
    this.state = {
      user: null,
      qrCode: null
    }
  }
  getUserQR() {
    return fetch('https://tkm-mm.herokuapp.com/api/users/4/generate_hash', { method: 'PUT' })
      .then(response => response.json())
      .then(responseJSON => {
        const qr = qrcode(10, 'L');
        const providersParam = this.props.selected.map((x) => {return `&providers[]=${x}`}).join('');
        const userURL = `https://tkm-mm.herokuapp.com/api/users/${responseJSON.api_hash}?${providersParam}`;
        qr.addData(userURL);
        qr.make();
        const base64 = qr.createImgTag().match(/src="(.*?)"/i)[1].replace('gif', 'png');
        this.setState({user: responseJSON, qrCode: base64});
      })
      .catch(error => alert(error))
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.user && <View>
          <TouchableHighlight onPress={() => this.getUserQR()}>
            <Text style={styles.welcome}>Load QR Code</Text>
          </TouchableHighlight>
        </View>}
        {this.state.user && <View style={styles.container}>
          <Text style={styles.introduction}>Have fun {this.state.user.username}</Text>
          <Image source={{uri: this.state.qrCode}} style={{width: 210, height: 210}}/>
        </View>}
      </View>
    )
  }
}
