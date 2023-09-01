import firestore from '@react-native-firebase/firestore';
import GetCurrentUser from '../hooks/GetCurrentUser';
import {Alert} from 'react-native';

const AddHouse = async (title, address, rooms, bathrooms, surface, rent) => {
  try {
    const user = GetCurrentUser();
    const docRef = await firestore().collection('Houses').add({
      title: title,
      address: address,
      rooms: rooms,
      bathrooms: bathrooms,
      surface: surface,
      rent: rent,
      userId: user.uid,
      created: firestore.FieldValue.serverTimestamp(),
    });

    return docRef.id;
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export default AddHouse;
