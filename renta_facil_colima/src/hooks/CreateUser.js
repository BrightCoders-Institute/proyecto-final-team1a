import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const CreateUser = async (
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = response.user;
    await firestore().collection('UserExtraInfo').doc(user.uid).set({
      firstName,
      lastName,
      phoneNumber,
      activeAccount: false,
    });

    return {success: true, user};
  } catch (error) {
    Alert.alert('Error', error.message);
    return {success: false, error};
  }
};
export default CreateUser;
