import firestore from '@react-native-firebase/firestore';
import GetCurrentUser from '../hooks/GetCurrentUser';
import {Alert} from 'react-native';
import SaveImagesAction from './SaveImagesAction';

const AddHouse = async values => {
  try {
    const user = GetCurrentUser();
    const imagesUrl = await SaveImagesAction(values.images, user.uid);
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
        rent: parseFloat(values.rent),
        images: firestore.FieldValue.arrayUnion(...imagesUrl),
        userId: user.uid,
        created: firestore.FieldValue.serverTimestamp(),
      });

    return docRef.id;
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export default AddHouse;
