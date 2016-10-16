/**
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  Linking
} from 'react-native';
import QRCodeScreen from '../../lib/QRCodeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
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
              {this.state.user.identities.map(i => <View style={Styles.container} key={i.provider}>
                <TouchableHighlight onPress={() => {
                  return Linking.canOpenURL(i.provider_account_url).then(supported => {
                    if (!supported) {
                      console.log('Can\'t handle url: ' + i.provider_account_url);
                    } else {
                      return Linking.openURL(i.provider_account_url);
                    }
                  }).catch(err => console.error('An error occurred', err));
                }}>
                  <Icon name={i.provider} size={420/10} color="#333"/>
                </TouchableHighlight>
              </View>)}
            </View>
          </Modal>
        </View>}
      </View>
    )
  }
}
