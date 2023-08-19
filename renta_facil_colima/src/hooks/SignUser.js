import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../Firebase/FirebaseConfig';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const SignUser = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      //Sign in
      const user = userCredential.user;
      console.log(user.email,'Welcome');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export default SignUser;
