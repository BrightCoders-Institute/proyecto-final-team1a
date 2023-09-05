
import React, {useState} from 'react';
import { View, Button, Image } from 'react-native';
import PickImagesFromGallery from '../../hooks/PickImagesFromGallery';
import BasicButton from '../buttons/BasicButton';
import { StyleSheet } from 'react-native';

function PerfilPhoto() {
    const [selectedImageUri, setSelectedImageUri] = useState(null);

  const handlePickImage = async () => {
    const result = await PickImagesFromGallery();

    if (result && !result.didCancel && !result.errorCode) {
      const uri = result.assets[0].uri;
      console.log('Ruta de la imagen seleccionada:', uri);

      // Puedes mostrar la imagen en tu componente si lo deseas
      setSelectedImageUri(uri);
    }
  };

  return (
    <View style={styles.container}>
      <BasicButton 
      text={'Seleccionar imagen'} 
      onPress={handlePickImage}
      textSize={20}
      backgroundColor={'white'}
      height={59}
      width={250}
      borderColor={'#B1F1D1'}
      
      />
      {selectedImageUri && (
        <Image source={{ uri: selectedImageUri }} style={{ width: 200, height: 200 }} />
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
