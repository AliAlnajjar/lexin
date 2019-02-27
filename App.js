/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import HomeDrawer from './app/screens/Home'
import {createAppContainer } from "react-navigation";
import {View, StatusBar} from 'react-native'

export default class App extends React.Component {
  render() {
    return (

    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content"/> 
      <AppContainer/>
    </View>
    );
  }
}
const AppContainer = createAppContainer(HomeDrawer);
