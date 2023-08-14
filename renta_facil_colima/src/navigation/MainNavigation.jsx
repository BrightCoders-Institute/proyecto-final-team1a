import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabsNavigation from './BottomTabsNavigation';
import LoginScreen from '../View/Screens/LoginScreen';
import SignUpScreen from '../View/Screens/SignUpScreen';
import SplashScreen from '../View/Screens/SplashScreen';
import MainScreen from '../View/Screens/MainScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name='Splash' component={SplashScreen}/>
      <Stack.Screen name='Start' component={MainScreen}/>
      <Stack.Screen name='LogIn' component={LoginScreen}/>
      <Stack.Screen name='SignUp' component={SignUpScreen}/> 
      <Stack.Screen name="HomeTabs" component={BottomTabsNavigation} />
      {/* <Stack.Screen name='HouseDetail' component={HouseDetailScreen} /> Descomentar cuando se tenga la screen*/}
      {/* <Stack.Screen name='HouseDetail' component={HouseDetailScreen} /> Descomentar cuando se tenga la screen*/}
    </Stack.Navigator>
  );
};

export default MainNavigation;
