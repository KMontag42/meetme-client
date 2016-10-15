/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  Text,
  Navigator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Routes from './routes';

export default class meetme extends Component {
  render() {
    return (
      <Navigator
        initialRoute={Routes[0]}
        initialRouteStack={Routes}
        renderScene={ (route, navigator) => <route.Component navigator={navigator} {...route.props}/>}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              {
                if (route.index === 0) {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                      <Icon name="chevron-left" size={30} color="#eee"
                            style={{padding: 10}}/>
                    </TouchableHighlight>
                  );
                }
              },
              RightButton: (route, navigator, index, navState) =>
              {
                if (route.index === 1) {
                  return null;
                }
                return (
                  <TouchableHighlight onPress={() => navigator.push(Routes[1])}>
                    <Icon name="user" size={30} color="#eee"
                          style={{padding: 10}}/>
                  </TouchableHighlight>
                );
              },
              Title: (route, navigator, index, navState) =>
              { return (<Text style={{color: '#eee'}}></Text>); },
            }}
            style={{backgroundColor: 'gray'}}
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('meetme', () => meetme);
