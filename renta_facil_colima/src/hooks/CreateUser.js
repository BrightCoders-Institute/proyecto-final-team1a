import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const CreateUser = async (email, password) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = response.user;
    return user;
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};
export default CreateUser;
