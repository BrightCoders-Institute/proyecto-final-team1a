import React from 'react';
import {View, } from 'react-native';
import LogoRFC from './LogoRFC';
import styles from '../../styles/SplashScreenStyle';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <LogoRFC></LogoRFC>
      </View>
    </View>
  );
};


export default SplashScreen;
