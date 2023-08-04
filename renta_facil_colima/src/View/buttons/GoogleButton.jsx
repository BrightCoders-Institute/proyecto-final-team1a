import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import GoogleButtonStyles from '../../Styles/GoogleButtonStyle';

const GoogleButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={GoogleButtonStyles.button}>
      <Image
        style={GoogleButtonStyles.icon}
        source={require('../../assets/img/google-logo.png')}
      />
      <Text style={GoogleButtonStyles.text}>
        Sign up with google{'\n'}
        account
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;
