import React, {useState, useEffect} from 'react';
import GetImages from '../../hooks/GetImages';
import {FlatList, Image} from 'react-native';

export const Carrucel = ({images}) => {
  return (
    <FlatList
      data={images}
      pagingEnabled={true}
      horizontal={true}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <Image
          source={{uri: item}}
          style={{
            width: 350,
            height: 200,
            padding: 5,
            margin: 15,
            borderRadius: 15,
          }}
        />
      )}
    />
  );
};
