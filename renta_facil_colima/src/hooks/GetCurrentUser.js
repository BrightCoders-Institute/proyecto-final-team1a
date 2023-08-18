import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (user) {
  console.log(user.displayName);
} else {
  //No user is signed in. 
}