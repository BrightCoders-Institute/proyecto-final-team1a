import {getAuth, signOut} from 'firebase/auth';
const handleLogOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      return true;
    })
    .catch(error => {
      // An error happened.
    });
};

export default handleLogOut;
