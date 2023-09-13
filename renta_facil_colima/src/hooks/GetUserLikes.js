import firestore from '@react-native-firebase/firestore';
import GetCurrentUser from './GetCurrentUser';
import {Alert} from 'react-native';

const GetUserLikes = async () => {
  try {
    const user = GetCurrentUser();
    const userRef = await firestore()
      .collection('UsersLikes')
      .doc(user.uid)
      .get();
    if (userRef.exists && userRef.data().likes.length > 0) {
      const HousesLikes = await firestore()
        .collection('Houses')
        .where(firestore.FieldPath.documentId(), 'in', userRef.data().likes)
        .get();
      const data = [];
      HousesLikes.forEach(documentSnapshot => {
        const item = {
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        };
        data.push(item);
      });
      return data;
    }
  } catch (error) {
    Alert.alert('Error', 'Error at getting your likes');
  }
};

export default GetUserLikes;
