import {Alert, PermissionsAndroid, Platform} from 'react-native';

const AskExternalReadPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const permisionAskApi =
        Platform.Version >= 33 ? AskPermissionsApi33 : AskPermissionApi33Lower;
      const granted = await permisionAskApi();
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (e) {
      Alert.alert('Write permission err', e.message);
    }
  } else {
    return true;
  }
};

const AskPermissionsApi33 = () => {
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
    {
      title: 'We need your permission to read images',
      message: 'App needs access to Storage to let you upload images',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );
};

const AskPermissionApi33Lower = () => {
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    {
      title: 'External Storage Write Permission',
      message: 'App needs access to Storage to let you upload images',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );
};

export default AskExternalReadPermission;
