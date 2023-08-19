import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Firebase/FirebaseConfig";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const CreateUser = async (email,password) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(); 
   
    try { 
        const  response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user;
        return user;
    } catch (error) {
        console.log(error);
    }
}
export default CreateUser;