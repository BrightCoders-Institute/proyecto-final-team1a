import {useState} from 'react';
import {Alert} from 'react-native';
import CreateUser from './CreateUser';
const SignUpScreenState = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      phoneNumber.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
    } else if (password.length < 8) {
     Alert.alert('Error','Contraseña muy corta');
    }
    CreateUser(email,password);
  };

  const Cancel = () => {
    //future logic to cancel the form and go back to login
  }
  return{
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
  }
};


export default SignUpScreenState;
