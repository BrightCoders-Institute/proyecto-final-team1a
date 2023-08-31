import React from 'react';
import HorizontalImagesList from './HorizontalImagesList';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
import Colors from '../../styles/Colors';
import HouseImageFormStyle from '../../styles/HouseImageFormStyle';
import UseHouseImagesFormState from '../../hooks/UseHouseImagesFormState';

const HousesImagesForm = ({images, updateImages}) => {
  const {handlePickImages, onAddItems, onDelete} = UseHouseImagesFormState();

  const handleSelectImages = async () => {
    const imagesUriArray = await handlePickImages();
    const newArray = onAddItems(images, imagesUriArray);
    updateImages(newArray);
  };

  const handleDelete = index => {
    const newArray = onDelete(images, index);
    updateImages(newArray);
  };

  return (
    <View>
      <Button
        style={HouseImageFormStyle.button}
        labelStyle={HouseImageFormStyle.buttonText}
        icon="file-image-plus"
        mode="outlined"
        color={Colors.Malachite}
        onPress={() => handleSelectImages()}>
        Add images
      </Button>
      <HorizontalImagesList onDelete={handleDelete} images={images} />
    </View>
  );
};

export default HousesImagesForm;
