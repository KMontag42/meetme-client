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
import HomeView from './components/HomeView';
import AccountView from './components/AccountView';

const routes = [
  { Component: HomeView, title: 'some title', index: 0 },
  { Component: AccountView, title: 'another title', index: 1 }
];

export default class meetme extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={ (route, navigator) => {
          console.log(route.Component);
          return <route.Component />
        }}
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
                      <Text>Back</Text>
                    </TouchableHighlight>
                  );
                }
              },
              RightButton: (route, navigator, index, navState) =>
              {
                if (route.index != 0) {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => navigator.push(routes[route.index+1])}>
                      <Text>Forward</Text>
                    </TouchableHighlight>
                  );
                }
              },
              Title: (route, navigator, index, navState) =>
              { return (<Text>Awesome Nav Bar</Text>); },
            }}
            style={{backgroundColor: 'gray'}}
          />
        }
      />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('meetme', () => meetme);
