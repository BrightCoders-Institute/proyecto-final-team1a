import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

GoogleSignin.configure({
  webClientId: Config.WEB_CLIENT_ID,
});

const GoogleSignUp = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user = auth().signInWithCredential(googleCredential);

    const userDoc = await firestore()
      .collection('UserExtraInfo')
      .doc(user.uid)
      .get({ source: 'server' });
    const userData = userDoc.data();
  
    let action = null;

    if (!userData) {
      await firestore().collection('UserExtraInfo').doc(user.uid).set({
        activeAccount: false,
      });
      action = 'ExtraInfo';
      console.log('Executing: !userData');
    } else if (userData && !userData.activeAccount) {
      action = 'ExtraInfo';
      console.log('Executing: userData && !userData.activeAccount');

    } else {
      action = 'HomeTabs';
      console.log('Executing: else block');
    }
    console.log('Value of action:', action);
    return action;
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};
export default GoogleSignUp;
