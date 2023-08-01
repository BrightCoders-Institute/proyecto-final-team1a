import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type WhiteButtonProps = {
  text: string;
  onPress: () => void;
};

const WhiteButton = ({text, onPress}: WhiteButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {borderColor: '#058C42'}]}>
      <Text style={[styles.text, {color:'#00D25D'}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 300,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 25,
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 20},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default WhiteButton;
