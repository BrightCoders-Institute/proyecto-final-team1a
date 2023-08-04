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

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF', alignItems:'center'}}>
      <BasicButton
        text="Login"
        onPress={() => console.log('Hello World')}
        textSize={20}
        borderColor="#058C42"
        backgroundColor="#FFF"
        height={59}
        elevation={10}
        textColor='#00D25D'
        width={150}
        shadow={true}
      />
      <BasicButton
        text="Sign up"
        textSize={20}
        onPress={() => console.log('Hello World')}
        borderColor="#B1F1D1"
        backgroundColor="#FFF"
        height={59}
        elevation={0}
        textColor='#9E9A9A'
        width={150}
        shadow={false}
      />
      <BasicButton
        text="Sign up"
        textSize={32}
        onPress={() => console.log('Hello World')}
        borderColor="#058C42"
        backgroundColor="#FFF"
        height={74}
        elevation={0}
        textColor='#00D25D'
        width={308}
        shadow={true}
      />
      <BasicButton
        text="Cancelar"
        onPress={() => console.log('Hello World')}
        textSize={20}
        borderColor="#058C42"
        backgroundColor="#04471C"
        height={59}
        elevation={10}
        textColor='#FFF'
        width={150}
        shadow={true}
        shadowColor='#0f9444'
      />
      <GoogleButton onPress={() => console.log('Hello World')} />
    </SafeAreaView>
  );
}

export default App;