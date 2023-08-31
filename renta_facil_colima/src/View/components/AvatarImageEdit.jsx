import React from 'react';
import {Pressable, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import AvatarImageEditStyle from '../../styles/AvatarImageEditStyle';

const AvatarImageEdit = ({image, onPress}) => {
  const localImage = image
    ? {uri: image}
    : require('../../assets/img/avatar_default.jpg');
  return (
    <View style={AvatarImageEditStyle.container}>
      <Avatar.Image size={125} source={localImage} />
      <View style={AvatarImageEditStyle.iconContainer}>
        <Pressable style={AvatarImageEditStyle.icon} onPress={onPress}>
          <Feather name="edit" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default AvatarImageEdit;
