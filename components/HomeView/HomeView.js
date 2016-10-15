import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  Picker,
  Navigator
} from 'react-native';
import styles from './Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import MultipleChoice from 'react-native-multiple-choice';
import Routes from '../../routes'

export default class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      showPicker: false,
      optionSelected: false,
      options: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {!this.state.showPicker && <View style={styles.container}>
          <Text style={styles.welcome}>Hi!</Text>
          <Text style={styles.welcome}>Get Ready to Navigate!</Text>
          <TouchableHighlight onPress={() => this.setState({showPicker: true})}>
            <Icon name="magnet" size={210} color={'#333'}/>
          </TouchableHighlight>
        </View>}
        {this.state.showPicker && <View style={styles.container}>
          <MultipleChoice
            style={{marginTop: 105, height: 420, width: 210, marginBottom: 0}}
            options={[
              'Phone',
              'Facebook',
              'Instagram',
              'Twitter'
            ]}
            selectedOptions={this.state.options}
            maxSelectedOptions={4}
            onSelection={(option)=>{
              let newState = Object.assign({}, this.state, {optionSelected: true});
              newState.options.push(option);
              this.setState(newState);
            }}
          />
          {this.state.optionSelected && <TouchableHighlight onPress={() => {
            this.setState({
              showPicker: false,
              optionSelected: false,
              options: []
            });
            this.props.navigator.push(Routes[2]);
          }}>
            <Icon name="check" size={52.5} color={'#333'}/>
          </TouchableHighlight>}
          <TouchableHighlight onPress={() => this.setState({
            showPicker: false,
            optionSelected: false,
            options: []
          })}>
            <Icon name="close" size={52.5} color={'#333'}/>
          </TouchableHighlight>
        </View>}
      </View>
    )
  }
}

class PickAccountsModal extends Component {
  static propTypes = {
    onRequestClose: React.PropTypes.func.isRequired
  };
  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={true}
        onRequestClose={this.props.onRequestClose}
      >

      </Modal>
    )
  }
}