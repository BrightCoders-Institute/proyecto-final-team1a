import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import ApplyQueryFilters from '../utils/ApplyQueryFilters';

const GetDataFromFirebase = () => {
  const {ApplyLimit, ApplyStartAfter, ApplyOrderBy, ApplyAndWhereFilters} = ApplyQueryFilters();

  const GetDataFromCollection = async (collectionName, orderBy = null, limit = null, startAfter = null, filters = null) => {
    try {
      let query = firestore().collection(collectionName);
      query = ApplyOrderBy(query, orderBy, 'desc');
      query = ApplyStartAfter(query, startAfter);
      query = ApplyLimit(query, limit);
      query = ApplyAndWhereFilters(query, filters);
      const dataCollection = await query.get();
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
      const documentSnapshot = await firestore().collection(collectionName).doc(documentId).get();
      if (documentSnapshot.exists) {
        const data = {
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        };
        return data;
      }
      else {
        Alert.alert('Error', `The ${collectionName} document does not exist`);
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
