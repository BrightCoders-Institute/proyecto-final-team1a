import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {Alert} from 'react-native';

GoogleSignin.configure({
  webClientId: Config.WEB_CLIENT_ID,
});

const GoogleSignUp = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user = auth().signInWithCredential(googleCredential);
    return user;
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};
export default GoogleSignUp;
