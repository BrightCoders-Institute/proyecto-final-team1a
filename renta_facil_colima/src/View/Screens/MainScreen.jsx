import React from 'react';
import {View} from 'react-native';
import LogoRFC from '../components/LogoRFC';
import BasicButton from '../buttons/BasicButton';
import styles from '../../styles/MainScreenStyle';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <LogoRFC showAppName={true}></LogoRFC>
      </View>
      <View style={styles.Botones}>
        <BasicButton text="Sign up" borderColor='#B1F1D1' width={150} height={59} textSize={20} />
        <BasicButton
          backgroundColor='#FFF'
          borderColor='#058C42'
          text="Login"
          width={150}
          height={59}
          textSize={20}
          textColor="#00D25D"
          shadow={true}
        />
      </View>
    </View>
  );
};

export default MainScreen;
