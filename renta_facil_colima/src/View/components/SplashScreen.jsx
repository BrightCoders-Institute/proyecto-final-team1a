import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import LogoRFC from './LogoRFC';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <LogoRFC></LogoRFC>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 135,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
