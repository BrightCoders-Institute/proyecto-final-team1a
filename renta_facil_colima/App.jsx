/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import BasicButton from './src/View/buttons/BasicButton';
import GoogleButton from './src/View/buttons/GoogleButton';
import SignUpScreen from './src/View/Screens/SignUpScreen';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF', alignItems:'center'}}>
      <SignUpScreen/>
    </SafeAreaView>
  );
}

export default App;