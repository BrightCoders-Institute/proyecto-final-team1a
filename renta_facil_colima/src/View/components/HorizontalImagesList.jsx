import React, {useState} from 'react';
import {ImageBackground, FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import Colors from '../../styles/Colors';
import HorizontalImagesListStyle from '../../styles/HorizontalImagesListStyle';

const HorizontalImagesList = ({images, onDelete}) => {
  const [deletedItem, setDeletedItem] = useState(null);

  const handleDelete = index => {
    setDeletedItem(index);
    onDelete(index);
  };

  const itemToRender = ({item}) => {
    return (
      <ImageBackground
        source={{uri: item.uri}}
        style={HorizontalImagesListStyle.containerImage}>
        <IconButton
          icon="close"
          style={HorizontalImagesListStyle.closeButton}
          color={Colors.White}
          size={18}
          onPress={() => handleDelete(item.id)}
        />
      </ImageBackground>
    );
  };

  return (
    <FlatList
      horizontal
      data={images}
      keyExtractor={item => item.id.toString()}
      renderItem={itemToRender}
      extraData={deletedItem}
    />
  );
};

export default HorizontalImagesList;
