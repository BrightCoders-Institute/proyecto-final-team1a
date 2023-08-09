/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginScreen from './src/View/Screens/LoginScreen';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF', alignItems:'center'}}>
      <LoginScreen/>
    </SafeAreaView>
  );
}

export default App;