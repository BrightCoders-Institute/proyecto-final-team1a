import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Card from './card';

const Lista = ({data}) => {
  const renderItem = ({item}) => <Card propiedad={item} />;
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Lista;
