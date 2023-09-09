import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const SignUser = async (email, password) => {
  const navigation = useNavigation();
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;

    const userDoc = await firestore()
      .collection('UserExtraInfo')
      .doc(user.uid)
      .get();
    const userData = userDoc.data();

    if (userData && userData['Active Account'] === false) {
      navigation.navigate('ExtraInfo');
    } else {
      navigation.navigate('MainScreen');
    }

    return user;
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};

export default SignUser;
