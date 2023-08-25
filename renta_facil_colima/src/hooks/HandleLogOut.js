import auth from '@react-native-firebase/auth';

const handleLogOut = async () => {
  auth().signOut();
};

export default handleLogOut;
