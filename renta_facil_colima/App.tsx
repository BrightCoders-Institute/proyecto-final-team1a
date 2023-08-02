import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoRFC from './Components/Logo/LogoRFC';

const App = () => {
  return (
    <View style={styles.container}>
    <LogoRFC showAppName={true}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default App;
