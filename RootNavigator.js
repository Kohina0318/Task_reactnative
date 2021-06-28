import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DrawerContent from './DrawerContent';

export default function RootNavigator() {
  const StackNav = createStackNavigator();
  function Component() {
    return (
      <StackNav.Navigator>
        
        <StackNav.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />

      </StackNav.Navigator>
    );
  }

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Component}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
