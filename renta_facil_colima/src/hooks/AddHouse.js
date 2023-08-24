import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "../Firebase/FirebaseConfig";
import GetCurrentUser from "./GetCurrentUser";


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const AddHouse = async (title, address, rooms,bathrooms, surface, rent ) => {

try {
  const docRef = await addDoc(collection(db, "Houses"), {
    title: title,
    address: address,
    rooms: rooms,
    bathrooms: bathrooms, 
    surface: surface,
    rent: rent,
    //img: img, para el futuro//
    userId: GetCurrentUser()
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
};

export default AddHouse;