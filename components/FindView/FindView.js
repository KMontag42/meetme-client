/**
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Modal
} from 'react-native';
import QRCodeScreen from '../../lib/QRCodeScreen';
import Styles from '../../Styles';

export default class FindView extends Component {

  constructor() {
    super()
    this.state = {
      showUserModal: false,
      user: null
    };
  }

  getUserJson(url) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({showUserModal: true, user: responseJson})
      })
  }

  onSuccess(barcode) {
    this.getUserJson(barcode);
  }

  render() {
    return (
      <View style={Styles.container}>
        {!this.state.showUserModal && <View style={Styles.container}>
          <QRCodeScreen onSuccess={(result) => this.onSuccess(result)} />
          <TouchableHighlight onPress={() => this.onSuccess('https://tkm-mm.herokuapp.com/api/users/4')}>
            <Text style={Styles.welcome}>success test</Text>
          </TouchableHighlight>
        </View>}
        {this.state.showUserModal && <View style={Styles.container}>
          <Modal
            animationType={'slide'}
            visible={true}
            onRequestClose={() => this.setState({showUserModal: false, user: null})}
            >
            <View style={Styles.container}>
              {this.state.user.identities.map(i => <Text style={Styles.welcome}>http://facebook.com/{i.uid}</Text>)}
            </View>
          </Modal>
        </View>}
      </View>
    )
  }
}
