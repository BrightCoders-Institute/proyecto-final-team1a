import React from 'react';
import {Text, View} from 'react-native';
import Textinput from '../components/Textinput';
import BasicButton from '../buttons/BasicButton';
import SignUpScreenState from '../../hooks/SignUpScreenState';
const SignUpScreen = () => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setEmail,
    setPassword,
    validateForm,
  } = SignUpScreenState();

  return (
    <View>
      <Text
        style={{
          color: '#058C42',
          fontFamily: 'ConcertOne-Regular',
          fontSize: 36,
          textAlign: 'center',
          marginTop: 40,
        }}>
        SIGN UP
      </Text>
      <View
        style={{
          backgroundColor: '#C6D4CD',
          width: 380,
          height: 420,
          marginTop: 40,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
        }}>
        <Textinput
          placeholder="First name"
          margen={20}
          altura={40}
          padding={10}
          value={firstName}
          onChangeText={setFirstName}
        />
        <Textinput
          placeholder="Last name"
          margen={20}
          altura={40}
          padding={10}
          value={lastName}
          onChangeText={setLastName}
        />
        <Textinput
          placeholder="Email"
          margen={20}
          altura={40}
          padding={10}
          value={email}
          onChangeText={setEmail}
        />
        <Textinput
          placeholder="Password"
          margen={20}
          altura={40}
          padding={10}
          value={password}
          onChangeText={setPassword}
        />
        <Textinput
          placeholder="Phone number"
          margen={20}
          altura={40}
          padding={10}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
        }}>
        <BasicButton
          text={'Cancel'}
          textSize={20}
          textColor={'#9E9A9A'}
          height={59}
          width={150}
          borderColor={'#B1F1D1'}
        />
        <BasicButton
          text={'Sing Up'}
          textSize={20}
          textColor={'#00D25D'}
          height={59}
          width={150}
          borderColor={'#058C42'}
          onPress={()=>validateForm()}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
