import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BasicButtonStyles from '../../Styles/BasicButtonStyle';

const BasicButton = ({
  text,
  onPress,
  textColor,
  textSize,
  backgroundColor,
  borderColor,
  shadow,
  shadowColor,
  elevation,
  height,
  width,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          BasicButtonStyles.button,
          {
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            elevation: elevation,
            height: height,
            width: width,
          },
        ]}>
        <Text
          style={[
            BasicButtonStyles.text,
            {color: textColor, fontSize: textSize},
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
      {shadow && (
        <View
          style={[
            BasicButtonStyles.shadow,
            {
              width: width,
              height: height,
              marginTop: -height - 3,
              backgroundColor: shadowColor ?? '#c0c0c0',
            },
          ]}></View>
      )}
    </View>
  );
};

export default BasicButton;
