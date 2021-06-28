/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {Text, View} from 'react-native';
 import HomeScreen from './Component/HomeScreen';
 import RootNavigator from './Component/RootNavigator';
 import {NavigationContainer} from '@react-navigation/native';
 
 
 const App = props => {
   return (
     <NavigationContainer>
       <RootNavigator />
     </NavigationContainer>
   );
 };
 export default App;
 