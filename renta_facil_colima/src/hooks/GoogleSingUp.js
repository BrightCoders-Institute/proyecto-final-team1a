import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../Firebase/FirebaseConfig';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getAuth, signInWithCredential } from "firebase/auth";
import Config from 'react-native-config';
initializeApp(firebaseConfig);

GoogleSignin.configure({
  webClientId: Config.WEB_CLIENT_ID,
});

  const GoogleSignUp = async () => {
    try {
     await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
      const auth = getAuth();
      const userCredential = await signInWithCredential(auth, googleCredential);
      const user = userCredential.user;
      return true;
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };
  export default GoogleSignUp;