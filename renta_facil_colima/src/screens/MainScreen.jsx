import React from 'react';
import {View} from 'react-native';
import LogoRFC from '../View/components/LogoRFC';
import BasicButton from '../View/buttons/BasicButton';
import styles from '../styles/MainScreenStyle';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <LogoRFC showAppName={true}></LogoRFC>
      </View>
      <View style={styles.Botones}>
        <BasicButton text="Sign up" width={130} textSize={20} />
        <BasicButton
          text="Login"
          width={130}
          textSize={20}
          textColor="#008f39"
        />
      </View>
    </View>
  );
};

