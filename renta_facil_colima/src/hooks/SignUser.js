import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const SignUser = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};

export default SignUser;
