import firestore from '@react-native-firebase/firestore';
import GetCurrentUser from '../hooks/GetCurrentUser';
import {Alert} from 'react-native';

const AddHouse = async values => {
  try {
    const user = GetCurrentUser();
    const docRef = await firestore()
      .collection('Houses')
      .add({
        title: values.title,
        description: values.description,
        address: values.address,
        location: new firestore.GeoPoint(values.latitude, values.longitude),
        rooms: values.rooms,
        bathrooms: values.bathrooms,
        surface: values.surface,
        rent: values.rent,
        userId: user.uid,
        created: firestore.FieldValue.serverTimestamp(),
      });

    return docRef.id;
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export default AddHouse;
