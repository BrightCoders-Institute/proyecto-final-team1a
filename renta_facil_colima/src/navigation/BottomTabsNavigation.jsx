import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import ReusableMainScreen from '../View/Screens/ReusableMainScreen';
import ProfileScreen from '../View/Screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      activeColor="white"
      safeAreaInsets={{top: 10}}
      initialRouteName="Home"
      inactiveColor="#434343"
      backBehavior="history"
      barStyle={{backgroundColor: '#60DB98'}}
      shifting={true}>
      <Tab.Screen
        name="Home"
        component={ReusableMainScreen} // Cambiar por HomeScreen cuando este
        options={{
          tabBarColor: '#60DB98',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}
        initialParams={{screenType: 'HOME'}}
      />
      <Tab.Screen
        name="MyHouses"
        component={ReusableMainScreen} // Cambiar por MyHousesScreen cuando este 
        options={{
          tabBarColor: '#84A9C0',
          tabBarLabel: 'My houses',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="house-user" color={color} size={20} />
          ),
        }}
        initialParams={{screenType: 'MYHOUSES'}}
      />
      <Tab.Screen
        name="Likes"
        component={ReusableMainScreen}
        options={{
          tabBarColor: '#FF7477',
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart" color={color} size={22} />
          ),
        }}
        initialParams={{screenType: 'LIKES'}}
      /> 
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarColor: '#CDB4DB',
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;
