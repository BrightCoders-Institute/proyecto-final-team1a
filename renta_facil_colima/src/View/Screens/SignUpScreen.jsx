import React from 'react';
import {Text, View} from 'react-native';
import Textinput from '../components/Textinput';
import BasicButton from '../buttons/BasicButton';
import SignUpScreenState from '../../hooks/SignUpScreenState';
import SignUpScreenStyle from '../../styles/SignUpScreenStyle';
const SignUpScreen = ({navigation}) => {
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

  const register = async () => {
    const  condicion = await validateForm()
    console.log(condicion);
    if (condicion){
      navigation.navigate("HomeTabs")
    }
  }
  return (
    <View style={SignUpScreenStyle.container}>
      <Text style={SignUpScreenStyle.titleText}>SIGN UP</Text>
      <View style={SignUpScreenStyle.card}>
        <Textinput
          placeholder="First name"
          margen={20}
          altura={49}
          padding={10}
          value={firstName}
          onChangeText={setFirstName}
        />
        <Textinput
          placeholder="Last name"
          margen={20}
          altura={49}
          padding={10}
          value={lastName}
          onChangeText={setLastName}
        />
        <Textinput
          placeholder="Email"
          margen={20}
          altura={49}
          padding={10}
          value={email}
          onChangeText={setEmail}
        />
        <Textinput
          placeholder="Password"
          margen={20}
          altura={49}
          padding={10}
          value={password}
          onChangeText={setPassword}
        />
        <Textinput
          placeholder="Phone number"
          margen={20}
          altura={49}
          padding={10}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View
        style={SignUpScreenStyle.buttonsContainer}>
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
          backgroundColor='#FFF'
          textSize={20}
          textColor={'#00D25D'}
          height={59}
          width={150}
          borderColor={'#058C42'}
          shadow={true}
          onPress={() =>register()}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
