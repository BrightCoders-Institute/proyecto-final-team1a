import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogoRFC from '../View/components/LogoRFC';
import BasicButton from '../View/buttons/BasicButton';

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

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    bottom: 20,
  },
  AppName: {
    textAlign: 'center',
  },
  Botones: {
    position: 'absolute', // Posición absoluta en relación con el contenedor principal
    bottom: 0, // Se coloca en la parte inferior
    left: 0, // Se ajusta a la izquierda
    right: 0, // Se ajusta a la derecha
    flexDirection: 'row', // Los componentes se colocarán en una fila
    justifyContent: 'space-between', // Espacio entre los componentes
    paddingHorizontal: 30, // Espacio horizontal
    paddingBottom: 60,
  },
});
