import React from 'react';
import {TouchableOpacity} from 'react-native';
import GetCurrentUser from '../../hooks/GetCurrentUser';
import UseLikeHouse from '../../hooks/UseLikeHouse';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LikeButtonStyle from '../../styles/LikeButtonStyle';

const LikeButton = ({propiedad}) => {
  const user = GetCurrentUser();
  const {HandleLikePress, likeColor} = UseLikeHouse(propiedad, user.uid);
  return (
    <TouchableOpacity
      onPress={() => HandleLikePress()}
      style={[LikeButtonStyle.likeBtn, {backgroundColor: likeColor()}]}>
      <MaterialCommunityIcons name="cards-heart" size={18} color="white" />
    </TouchableOpacity>
  );
};

export default LikeButton;
