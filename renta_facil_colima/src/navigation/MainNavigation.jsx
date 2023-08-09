import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabsNavigation from './BottomTabsNavigation';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name='Splash' component={SplashScreen}/>
      <Stack.Screen name='Start' component={StartScreen}/>
      <Stack.Screen name='LogIn' component={LogInScreen}/>
      <Stack.Screen name='SignUp' component={SignUp}/> Descomentar Cuando se tengan las respectivas screens*/}
      <Stack.Screen name="HomeTabs" component={BottomTabsNavigation} />
      {/* <Stack.Screen name='HouseDetail' component={HouseDetailScreen} /> Descomentar cuando se tenga la screen*/}
      {/* <Stack.Screen name='HouseDetail' component={HouseDetailScreen} /> Descomentar cuando se tenga la screen*/}
    </Stack.Navigator>
  );
};

export default MainNavigation;
