import {getAuth} from 'firebase/auth';
const GetCurrentUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    console.log(user.email);
    return user.email;
  } else {
    console.log("No user is signed in.");
  }
};

export default GetCurrentUser