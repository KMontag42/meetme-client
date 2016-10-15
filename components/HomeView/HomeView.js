/**
 * @flow
 */

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
          <TouchableHighlight onPress={() => this.setState(Object.assign({}, this.state, {showPicker: true}))} style={{marginBottom: 25}}>
            <View>
              <Icon name="magnet" size={105} color={'#333'}/>
              <Text style={styles.welcome}>Send</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigator.push(Routes[3])}>
            <View>
              <Icon name="binoculars" size={105} color={'#333'}/>
              <Text style={styles.welcome}>Find</Text>
            </View>
          </TouchableHighlight>
        </View>}
        {this.state.showPicker && <View style={styles.container}>
          <MultipleChoice
            style={{marginTop: 105, height: 420, width: 210, marginBottom: 0}}
            options={[
              'Phone',
              'Facebook',
              'Instagram',
              'Twitter',
              'LinkedIn'
            ]}
            selectedOptions={this.state.options}
            maxSelectedOptions={4}
            onSelection={(option)=>{
              let newState = Object.assign({}, this.state, {optionSelected: true});
              newState.options.push(option.toLowerCase());
              newState.options = newState.options.filter((v, i, a) => a.indexOf(v) === i);
              this.setState(newState);
            }}
          />
          {this.state.optionSelected && <TouchableHighlight onPress={() => {
            const route = Object.assign({}, Routes[2], { props: {selected: this.state.options}  })
            this.props.navigator.push(route);
          }}>
            <Icon name="check" size={52.5} color={'#333'}/>
          </TouchableHighlight>}
          <TouchableHighlight onPress={() => this.setState(
            Object.assign({}, this.state, {
              showPicker: false,
              optionSelected: false,
              options: []
            })
          )}>
            <Icon name="close" size={52.5} color={'#333'}/>
          </TouchableHighlight>
        </View>}
      </View>
    )
  }
}
