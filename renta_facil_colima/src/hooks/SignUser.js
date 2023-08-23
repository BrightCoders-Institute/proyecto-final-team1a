import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { firebaseConfig } from '../Firebase/FirebaseConfig';
import {Alert} from 'react-native';

initializeApp(firebaseConfig);

const SignUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};

export default SignUser;
