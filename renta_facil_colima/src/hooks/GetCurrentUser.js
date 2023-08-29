import {getAuth} from 'firebase/auth';
import { Alert } from 'react-native/Libraries/Alert/Alert';
const GetCurrentUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    Alert.alert(user.uid);
    return user.uid;
  } else {
    Alert.alert("No user is signed in.");
  }
};

export default GetCurrentUser;