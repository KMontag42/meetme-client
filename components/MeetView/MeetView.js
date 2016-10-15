import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './Style';
import qrcode from '../../lib/qrcode'

export default class MeetView extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      qrCode: null
    }
  }
  getUserQR() {
    return fetch('https://meetme-api.herokuapp.com/users/1', { method: 'PUT' })
      .then(response => response.json())
      .then(responseJSON => {
        const qr = qrcode(10, 'L');
        const userURL = `https://meetme-api.herokuapp.com/users/show/${responseJSON.user_hash}`;
        qr.addData(userURL);
        qr.make();
        const imgTag = qr.createImgTag();
        const base64 = imgTag.match(/src="(.*?)"/i)[1].replace('gif', 'png');
        console.log({user: responseJSON, qrCode: base64});
        this.setState({user: responseJSON, qrCode: base64});
      })
      .catch(error => alert(JSON.stringify(error)))
  }

  componentDidMount() {
    this.getUserQR();
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.user && <Text style={styles.welcome}>Loading QR Code...</Text>}
        {this.state.user && <View style={styles.container}>
          <Text style={styles.introduction}>Have fun {this.state.user.username}</Text>
          <Image source={{uri: this.state.qrCode}} style={{width: 210, height: 210}}/>
        </View>}
      </View>
    )
  }
}