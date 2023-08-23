import { useState } from 'react';
import * as Yup from 'yup';
import SignUser from './SignUser';


const UseLoginScreenState = () => {

  const formInitialValues = {
    email: '',
    password: '',
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email field can not be empty'),
    password: Yup.string().required('Password field can not be empty'),
  });

  const handleLogin = async (email, password) => {
    const loginResponse = await SignUser(email, password);
    return loginResponse;
  }


  return {
    handleLogin,
    formInitialValues,
    loginSchema,
  };
};

export default UseLoginScreenState;