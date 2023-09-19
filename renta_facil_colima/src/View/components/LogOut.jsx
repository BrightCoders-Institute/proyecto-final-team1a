import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import handleLogOut from '../../hooks/HandleLogOut';

const LogOut = () => {
  const navigation = useNavigation();

  const HandleAction = () => {
    handleLogOut();
    navigation.replace('Start');
  };

  return (
    <TouchableOpacity onPress={HandleAction}>
      <Icon name="left" size={35} />
    </TouchableOpacity>
  );
};

export default LogOut;
