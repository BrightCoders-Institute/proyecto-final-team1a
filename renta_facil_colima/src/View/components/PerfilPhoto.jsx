
import React from 'react';
import { View, Image } from 'react-native';
import PickImagesFromGallery from '../../hooks/PickImagesFromGallery';
import BasicButton from '../buttons/BasicButton';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

function PerfilPhoto() {

  const formik = useFormikContext();


  const handlePickImage = async () => {
    const result = await PickImagesFromGallery();

    if (result && !result.didCancel && !result.errorCode) {
      const uri = result.assets[0].uri;
      console.log('Ruta de la imagen seleccionada:', uri);

      formik.setFieldValue('profilePicture', uri);
    }
  };

  return (
    <View style={styles.container}>
      <BasicButton 
      text={'Select profile picture'} 
      onPress={handlePickImage}
      textSize={20}
      backgroundColor={'white'}
      height={59}
      width={250}
      borderColor={'#B1F1D1'}
      
      />
      {formik.values.profilePicture && (
        <Image
        source={{ uri: formik.values.profilePicture }}
        style={{ width: 200, height: 200 }}
      />
      )}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',

  }
});

export default PerfilPhoto;
