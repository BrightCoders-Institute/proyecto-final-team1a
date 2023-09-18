import React from 'react';
import {FlatList, View} from 'react-native';
import Card from './card';

const Lista = ({data, refresh}) => {
  const renderItem = ({item}) => <Card propiedad={item} />;
  return (
    <View style={{marginBottom: 80}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={refresh}
      />
    </View>
  );
};

export default Lista;
