import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../Firebase/FirebaseConfig';
import {getAuth, getRedirectResult, GoogleAuthProvider} from 'firebase/auth';


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const GoogleSignUp = () => {
    signInWithRedirect(auth, provider);
  }
  getRedirectResult(auth)
    .then((result) => {
      const user = result.user;
      console.log("user:", user);
    })
    .catch((error) => {
      console.error("error in login:", error);
    });

export default GoogleSignUp;
