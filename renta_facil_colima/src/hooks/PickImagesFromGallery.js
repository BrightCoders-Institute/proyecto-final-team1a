import {launchImageLibrary} from 'react-native-image-picker';
import AskExternalReadPermission from '../utils/AskExternalReadPermission';
import {Alert} from 'react-native';

const PickImagesFromGallery = async (limit = 1) => {
  const options = {
    selectionLimit: limit,
    mediaType: 'photo',
    includeBase64: false,
  };

  const hasPermission = await AskExternalReadPermission();
  if (hasPermission) {
    const result = await launchImageLibrary(options);
    if (result.didCancel) {
      Alert.alert('Cancelled', 'Canceled action');
    }
    if (result.errorCode) {
      Alert.alert('Error', result.errorMessage);
    }
    return result;
  } else {
    Alert.alert('Error', 'App do not have permissions');
    return null;
  }
};

export default PickImagesFromGallery;
