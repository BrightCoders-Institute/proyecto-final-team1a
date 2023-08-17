import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Firebase/FirebaseConfig";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const CreateUser = (email,password) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    }).catch((error) => {
        console.log(error);
    });
}

export default CreateUser;