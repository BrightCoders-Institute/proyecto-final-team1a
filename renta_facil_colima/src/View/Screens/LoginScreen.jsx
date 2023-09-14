import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import BasicButton from '../buttons/BasicButton';
import GoogleButton from '../buttons/GoogleButton';
import Loginstyles from '../../styles/LoginScreen';
import LogoRFC from '../components/LogoRFC';
import GoogleSignUp from '../../hooks/GoogleSingUp';
import {Formik} from 'formik';
import UseLoginScreenState from '../../hooks/UseLoginScreenState';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const LoginScreen = ({navigation}) => {
  const {
    handleLogin,
    formInitialValues,
    loginSchema,
    handleHidePassword,
    iconPassword,
    hidePassword
  } = UseLoginScreenState();

  const googleSign = async () => {
    const response = await GoogleSignUp();
    if (response) {
      navigation.navigate(response);
    }
  };

  const login = async ({email, password}) => {
    const response = await handleLogin(email, password);
    if (response) {
      navigation.navigate('HomeTabs');
    }
  };
  return (
    <View style={Loginstyles.container}>
      <View style={Loginstyles.logoContainer}>
        <LogoRFC showAppName={false} />
      </View>
      <Formik
        initialValues={formInitialValues}
        onSubmit={login}
        validationSchema={loginSchema}
      >
        {({ handleChange,handleBlur, handleSubmit, values, errors}) => (
          <View>
            <TextInput
              style={Loginstyles.inputs}
              onChangeText={handleChange('email')}
              value={values.email}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#8C8C8C"
              placeholder="Email"
            />
            {errors.email && <Text style={Loginstyles.errorText}>{errors.email}</Text>}
            <View style={Loginstyles.row}>
              <TextInput
                style={[Loginstyles.inputs, Loginstyles.inputsPassword]}
                secureTextEntry={hidePassword}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Password"
                placeholderTextColor="#8C8C8C"
              />
              <Pressable onPress={handleHidePassword}>
                <FontAwesome name={iconPassword()} size={20} color="black"/>
              </Pressable>
            </View>
            {errors.password && <Text style={Loginstyles.errorText}>{errors.password}</Text>}
            <View style={Loginstyles.buttonsContainer}>
              <BasicButton
                text="Login"
                onPress={handleSubmit}
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
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
