import storage from '@react-native-firebase/storage';
import {v4 as uuidv4} from 'uuid';
import GetImageExtensionByUri from '../utils/GetImageExtensionByUri';
import {Alert} from 'react-native';

const SaveImagesAction = async (images, userId) => {
  const data = [];
  try {
    for (const image of images) {
      const extension = GetImageExtensionByUri(image.uri);
      const reference = storage().ref(
        `house-image-${uuidv4()}-${userId}.${extension}`,
      );
      await reference.putFile(image.uri);
      const url = await reference.getDownloadURL();
      data.push(url);
    }
    return data;
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export default SaveImagesAction;
