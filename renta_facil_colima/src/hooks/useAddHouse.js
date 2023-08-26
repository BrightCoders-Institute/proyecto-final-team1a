import {initializeApp} from 'firebase/app';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import {firebaseConfig} from '../Firebase/FirebaseConfig';
import GetCurrentUser from '../hooks/GetCurrentUser';
import {Alert} from 'react-native';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const AddHouse = async (title, address, rooms, bathrooms, surface, rent) => {
  try {
    const user = GetCurrentUser();
    const docRef = await addDoc(collection(db, 'Houses'), {
      title: title,
      address: address,
      rooms: rooms,
      bathrooms: bathrooms,
      surface: surface,
      rent: rent,
      userId: user.uid,
    });

    return docRef.id;
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export default AddHouse;
