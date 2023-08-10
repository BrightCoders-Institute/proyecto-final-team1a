import React, {useState } from 'react'
import { TextInput, View, Alert } from 'react-native'
import BasicButton from '../buttons/BasicButton'
import GoogleButton from '../buttons/GoogleButton'
import Loginstyles from '../../styles/LoginScreen'
import LogoRFC from '../components/LogoRFC'

const LoginScreen = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [empityEmail, setValueEmail] = useState(false);
  const [empityPassword, setValuePassword] = useState(false);


  const isEmpity = () => {
    setValueEmail(email.trim() === '');
    setValuePassword(password.trim() === '');

    if (email.trim() === '' || password.trim() === '') {
      Alert.alert("Algun campo esta vacio");
    } else {
      validateEmail();
    }
  }

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      Alert.alert('Email válido', 'El email es válido.');
    } else {
      Alert.alert('Email inválido', 'Por favor, ingresa un email válido.');
    }
  };

  return (
    <View >
      <View style={Loginstyles.container}>
        <LogoRFC
        showAppName={'../../LogoRFC.png'}
          />
        <View style={[Loginstyles.shadow,
        empityEmail ? { borderColor: 'red' } : null
        ]}>
          <TextInput
            style={Loginstyles.inputs}
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor={'black'}
            placeholder="Email or Username"

          />
        </View>
        <View style={[Loginstyles.shadow,
        empityPassword ? { borderColor: 'red' } : null
        ]}>
          <TextInput
            style={Loginstyles.inputs}
            onChangeText={setPassword}
            value={password}
            placeholder='Password'
            placeholderTextColor={'black'}
          />
        </View>

        <BasicButton
          text="Login"
          onPress={isEmpity}
          textSize={20}
          borderColor="#058C42"
          backgroundColor="#FFF"
          height={59}
          elevation={10}
          textColor='#00D25D'
          width={150}
          shadow={true}
          shadowColor={'black'}
        />

        <GoogleButton onPress={() => console.log('Hello World')} />
      </View>
    </View>
  )
}

export default LoginScreen;