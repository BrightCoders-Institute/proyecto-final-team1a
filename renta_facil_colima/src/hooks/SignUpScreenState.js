import CreateUser from './CreateUser';
import * as Yup from 'yup';

const SignUpScreenState = () => {
  const signUpFormInitialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  };

  const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required('First name field can not be empty'),
    lastName: Yup.string().required('Last name field can not be empty'),
    phoneNumber: Yup.string().required('Phone number field can not be empty'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email field can not be empty'),
    password: Yup.string().required('Password field can not be empty'),
  });

  const handleSignUp = async (email, password) => {
    const signUpResponse = await CreateUser(email, password);
    return signUpResponse;
  };

  return {
    handleSignUp,
    signUpFormInitialValues,
    signUpSchema,
  };
};

export default SignUpScreenState;
