/**
 */

import React, {Component} from 'react';
import { TouchableOpacity,Button,View,Text,StyleSheet } from "react-native";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import SettingsScreen from './Settings';
import RLV from '../components/RLV';
import { HeaderBackButton } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons";



class HomeScreen extends Component {
  render() {
    return (
    <View style={{flex: 1, backgroundColor:'#FFFFFF',marginBottom:3}}>
      <View style={{ flex: 1, backgroundColor:'#D24929' ,alignItems: "center", justifyContent: "center" }}></View>
      <View style ={{flex: 15, backgroundColor:'lightgrey',width:"100%",alignItems: "center", justifyContent: "center",marginBottom : 20}}>
       <Button onPress = {()=> this.props.navigation.navigate("Settings")} title="Press Me"> Settings</Button>
       <RLV style ={{flex: 1, backgroundColor:'lightgrey'}}/>
      </View>
    </View>
    );
  }
}

export default  HomeStackNavigator = createStackNavigator(
    {
      Home     : {
        screen: HomeScreen,

        navigationOptions: ({ navigation }) => {
          return {
            headerLeft: (
              <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Icon name="menu" color = "#FFFFFF"size={36} style={{ padding: 10 }} />
              </TouchableOpacity>
            ),
            headerRight: (
              <TouchableOpacity onPress={() => alert(navigation)}>
                <Icon name="translate" color = "#FFFFFF"size={36} style={{ padding: 10 }} />
              </TouchableOpacity>
            ),
            title: "Lexin",
            headerStyle: {
                backgroundColor: '#D24929',
                borderBottomWidth: 0,
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontSize: 40,
                fontFamily:"Righteous",
            }, 
          };
        }
      },
      Settings : {
        screen: SettingsScreen,

        navigationOptions: {
          headerLeft: HeaderBackButton,
          title: "Settings",
          headerStyle: {
              backgroundColor: '#D24929',
              borderBottomWidth: 0,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
              fontSize: 25,
          },         
        }
      } 
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
             headerBackTitle : null,
         };
      }
    }
);
// export default  HomeDrawer = createDrawerNavigator({
//   HomeStack: {
//     screen: HomeStackNavigator,
//     navigationOptions:{
//       drawerLabel: 'Home',
//     }
//   },
  
// });

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
