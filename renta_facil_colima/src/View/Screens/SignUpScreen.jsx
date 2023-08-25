import React from 'react';
import {Text, View} from 'react-native';
import Textinput from '../components/Textinput';
import BasicButton from '../buttons/BasicButton';
import SignUpScreenState from '../../hooks/SignUpScreenState';
import SignUpScreenStyle from '../../styles/SignUpScreenStyle';
import UtilsStyle from '../../styles/UtilsStyle';
import {Formik} from 'formik';
const SignUpScreen = ({navigation}) => {
  const {handleSignUp, signUpFormInitialValues, signUpSchema} =
    SignUpScreenState();

  const register = async ({email, password}) => {
    const condicion = await handleSignUp(email, password);
    if (condicion) {
      navigation.navigate('HomeTabs');
    }
  };
  return (
    <View style={SignUpScreenStyle.container}>
      <Text style={SignUpScreenStyle.titleText}>SIGN UP</Text>
      <Formik
        initialValues={signUpFormInitialValues}
        onSubmit={register}
        validationSchema={signUpSchema}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View>
            <View style={SignUpScreenStyle.card}>
              <Textinput
                placeholder="First name"
                margen={20}
                altura={49}
                padding={10}
                value={values.firstName}
                onChangeText={handleChange('firstName')}
              />
              {errors.firstName && (
                <Text style={[UtilsStyle.errorText, {marginTop: -20}]}>
                  {errors.firstName}
                </Text>
              )}
              <Textinput
                placeholder="Last name"
                margen={20}
                altura={49}
                padding={10}
                value={values.lastName}
                onChangeText={handleChange('lastName')}
              />
              {errors.lastName && (
                <Text style={[UtilsStyle.errorText, {marginTop: -20}]}>
                  {errors.lastName}
                </Text>
              )}
              <Textinput
                placeholder="Email"
                margen={20}
                altura={49}
                padding={10}
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {errors.email && (
                <Text style={[UtilsStyle.errorText, {marginTop: -20}]}>
                  {errors.email}
                </Text>
              )}
              <Textinput
                placeholder="Password"
                margen={20}
                altura={49}
                padding={10}
                value={values.password}
                onChangeText={handleChange('password')}
              />
              {errors.password && (
                <Text style={[UtilsStyle.errorText, {marginTop: -20}]}>
                  {errors.password}
                </Text>
              )}
              <Textinput
                placeholder="Phone number"
                margen={20}
                altura={49}
                padding={10}
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
              />
              {errors.phoneNumber && (
                <Text style={[UtilsStyle.errorText, {marginTop: -20}]}>
                  {errors.phoneNumber}
                </Text>
              )}
            </View>
            <View style={SignUpScreenStyle.buttonsContainer}>
              <BasicButton
                text={'Cancel'}
                textSize={20}
                textColor={'#9E9A9A'}
                height={59}
                width={150}
                borderColor={'#B1F1D1'}
                onPress={() => navigation.goBack()}
              />
              <BasicButton
                text={'Sing Up'}
                backgroundColor="#FFF"
                textSize={20}
                textColor={'#00D25D'}
                height={59}
                width={150}
                borderColor={'#058C42'}
                shadow={true}
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUpScreen;
