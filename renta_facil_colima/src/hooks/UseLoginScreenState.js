import { useState } from 'react';


const UseLoginScreenState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emptyEmail, setValueEmail] = useState(false);
  const [emptyPassword, setValuePassword] = useState(false);

  const isEmpty = () => {
    setValueEmail(email.trim() === '');
    setValuePassword(password.trim() === '');

    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('You cant left any field empty', 'Please fill all the fields.');
    } else {
      validateEmail();
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      Alert.alert('Email válido', 'El email es válido.');
    } else {
      Alert.alert('Email inválido', 'Por favor, ingresa un email válido.');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    emptyEmail,
    emptyPassword,
    isEmpty,
  };
};

export default UseLoginScreenState;