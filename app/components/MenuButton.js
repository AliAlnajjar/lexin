import React from 'react';
import { Icon, View } from 'react-native';

export default class MenuButton extends React.Component {
    
  render() {
    return (
      <View>
       <Icon
            name="md-menu"
            size={30}
            color='white'
            onPress={() => navigation.navigate('DrawerOpen')} 
        />
      </View>
    );
  }
}
