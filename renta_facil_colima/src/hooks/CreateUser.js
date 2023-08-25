import auth from '@react-native-firebase/auth';

const CreateUser = async (email, password) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = response.user;
    return user;
  } catch (error) {
    Alert.alert.log(error);
  }
};
export default CreateUser;
