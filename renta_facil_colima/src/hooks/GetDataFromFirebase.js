import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../Firebase/FirebaseConfig';
import {Alert} from 'react-native';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
} from 'firebase/firestore/lite';

const GetDataFromFirebase = () => {
  initializeApp(firebaseConfig);
  const db = getFirestore();

  const GetDataFromCollection = async collectionName => {
    try {
      const dataCollection = await getDocs(collection(db, collectionName));
      const data = [];
      dataCollection.forEach(documentSnapshot => {
        const item = {
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        };
        data.push(item);
      });
      return data;
    } catch (error) {
      Alert.alert('Error', `We could not get the ${collectionName} data`);
    }
  };

  const GetDocumentFromCollection = async (collectionName, documentId) => {
    try {
      const docRef = doc(db, collectionName, documentId);
      const documentSnapshot = await getDoc(docRef);
      if (documentSnapshot.exists()) {
        const data = {
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        };
        return data;
      }
    } catch (error) {
      Alert.alert('Error', `We could not get the ${collectionName} data`);
    }
  };

  return {
    GetDataFromCollection,
    GetDocumentFromCollection,
  };
};

export default GetDataFromFirebase;
