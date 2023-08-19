import React from 'react';
import {Text, TextInput, View} from 'react-native';
import BasicButton from '../buttons/BasicButton';
import GoogleButton from '../buttons/GoogleButton';
import Loginstyles from '../../styles/LoginScreen';
import LogoRFC from '../components/LogoRFC';
import GoogleSignUp from '../../hooks/GoogleSingUp';
import UseLoginScreenState from '../../hooks/UseLoginScreenState';
const LoginScreen = ({navigation}) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emptyEmail,
    emptyPassword,
    isEmpty,
  } = UseLoginScreenState();

  const googleSign = async () => {
    const response = await GoogleSignUp();
    if (response) {
      navigation.navigate('HomeTabs');
    }
  };
  return (
    <View style={Loginstyles.container}>
      <View style={Loginstyles.logoContainer}>
        <LogoRFC showAppName={false} />
      </View>
      <View
        style={[Loginstyles.shadow, emptyEmail ? {borderColor: 'red'} : null]}>
        <TextInput
          style={Loginstyles.inputs}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#8C8C8C"
          placeholder="Email or Username"
        />
      </View>
      <View
        style={[
          Loginstyles.shadow,
          emptyPassword ? {borderColor: 'red'} : null,
        ]}>
        <TextInput
          style={Loginstyles.inputs}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="#8C8C8C"
        />
      </View>
      <View style={Loginstyles.buttonsContainer}>
        <BasicButton
          text="Login"
          onPress={isEmpty}
          textSize={32}
          borderColor="#058C42"
          backgroundColor="#FFF"
          height={74}
          elevation={10}
          textColor="#00D25D"
          width={308}
          shadow={true}
        />
        <GoogleButton onPress={googleSign} />
        <Text style={Loginstyles.text}>
          Do not have an account?
          <Text
            style={Loginstyles.hiperLinkText}
            onPress={() => navigation.goBack()}>
            {' '}
            go back to start
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
