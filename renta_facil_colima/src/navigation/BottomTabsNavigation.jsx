import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createMaterialBottomTabNavigator();

const TemporalScreenComponent = () => {
  return(
    <View>
      <Text>Home</Text>
    </View>
  )
};

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      activeColor="white"
      initialRouteName="Home"
      inactiveColor="#434343"
      backBehavior="history"
      barStyle={{backgroundColor: '#60DB98'}}
      shifting={true}>
      <Tab.Screen
        name="Home"
        component={TemporalScreenComponent} // Cambiar por HomeScreen cuando este
        options={{
          tabBarColor: '#60DB98',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="MyHouses"
        component={TemporalScreenComponent} // Cambiar por MyHousesScreen cuando este 
        options={{
          tabBarColor: '#84A9C0',
          tabBarLabel: 'My houses',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="house-user" color={color} size={20} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Likes"
        component={LikesScreen}
        options={{
          tabBarColor: '#FF7477',
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart" color={color} size={22} />
          ),
        }}
      /> Descomentar cuando este la LikesScreen*/}
      {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarColor: '#CDB4DB',
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={20} />
          ),
        }}
      /> Descomentar cuando este la ProfileScreen*/}
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;
