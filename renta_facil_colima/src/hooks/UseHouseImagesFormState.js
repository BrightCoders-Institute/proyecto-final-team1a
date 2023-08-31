import 'react-native-get-random-values';
import PickImagesFromGallery from './PickImagesFromGallery';
import {v4 as uuidv4} from 'uuid';
const UseHouseImagesFormState = () => {
  const onDelete = (array, id) => {
    if (array === null || array.length === 0 || id === null) {
      return array;
    } else {
      const index = array.findIndex(item => item.id === id);
      if (index > -1) {
        array.splice(index, 1);
      }
      return array;
    }
  };

  const onAddItems = (array, items) => {
    if (array === null || array.length === 0) {
      array = items;
    } else {
      array = array.concat(items);
    }
    return array;
  };

  const getUriDataFromImagePickerData = data => {
    let array = [];
    data.assets.forEach(item => {
      const imageItem = {
        id: uuidv4(),
        uri: item.uri,
      };
      array.push(imageItem);
    });
    return array;
  };

  const handlePickImages = async () => {
    const result = await PickImagesFromGallery(0);
    if (result) {
      return getUriDataFromImagePickerData(result);
    }
  };

  return {
    handlePickImages,
    onDelete,
    onAddItems,
  };
};

export default UseHouseImagesFormState;
