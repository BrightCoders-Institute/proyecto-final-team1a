import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabsNavigation from './BottomTabsNavigation';
import LoginScreen from '../View/Screens/LoginScreen';
import SignUpScreen from '../View/Screens/SignUpScreen';
import SplashScreen from '../View/Screens/SplashScreen';
import MainScreen from '../View/Screens/MainScreen';
import GetCurrentUser from '../hooks/GetCurrentUser';

const Stack = createStackNavigator();

const MainNavigation = () => {

  const getInitialRoute = () => {
    const user = GetCurrentUser();
    if (user){
      return 'HomeTabs'
    }
    return 'Start'
  }

  return (
    <Stack.Navigator
      initialRouteName={getInitialRoute()}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Start" component={MainScreen} />
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="HomeTabs" component={BottomTabsNavigation} />
      {/* <Stack.Screen name='HouseDetail' component={HouseDetailScreen} /> Descomentar cuando se tenga la screen*/}
      {/* <Stack.Screen name='HouseDetail' component={HouseDetailScreen} /> Descomentar cuando se tenga la screen*/}
    </Stack.Navigator>
  );
};

export default MainNavigation;
