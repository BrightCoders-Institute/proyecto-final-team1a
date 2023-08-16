import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "../Firebase/FirebaseConfig";



// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
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
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
};

export default AddHouse;