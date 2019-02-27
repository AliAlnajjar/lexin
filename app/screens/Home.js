/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text,Button,StyleSheet } from "react-native";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import SettingsScreen from './Settings'
import RLV from '../components/RLV'


class HomeScreen extends React.Component {
  render() {
    return (
    <View style={{flex: 1, backgroundColor:'#456990'}}>
      <View style={{ flex: 1, backgroundColor:'#D24929' ,alignItems: "center", justifyContent: "center" }}></View>
      <View style ={{flex: 13, backgroundColor:'#ddd',alignItems: "center", justifyContent: "center"}}>
       <RLV ref ="ff" style ={{flex: 1,hieght: 400,backgroundColor:'#D24929'}}/>
       <Button title = "press"onPress = { () => {this.refs.ff.fetchMoreData();}}/>
      </View>
    </View>
    );
  }
}


const HomeStackNavigator = createStackNavigator(
    {
      Home     : {screen: HomeScreen},
      Settings : {screen: SettingsScreen} 
    },
    {
      //headerMode:'none',
      defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Text> ... </Text>
            ),
            title: "Lexin",
            headerStyle: {
                backgroundColor: '#D24929',
                borderBottomWidth: 0,
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontSize: 35,
                fontFamily:"Righteous",
            }, 
        };
      }
    }
);
export default  HomeDrawer = createDrawerNavigator({
  HomeStack: {
    screen: HomeStackNavigator,
  },
});

//####################################
//####################################

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
