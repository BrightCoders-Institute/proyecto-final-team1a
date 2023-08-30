import auth from '@react-native-firebase/auth';
const GetCurrentUser = () => {
  const user = auth().currentUser;
  if (user) {
    return user;
  }
};

export default GetCurrentUser;