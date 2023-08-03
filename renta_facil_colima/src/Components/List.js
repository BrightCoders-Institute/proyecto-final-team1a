import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import propiedaes from '../data/propiedaes.json';
import Card from './card';

const Lista = () => {
  const renderItem = ({item}) => <Card propiedad={item} />;
  return (
    <SafeAreaView>
      <FlatList
        data={propiedaes.propiedades}
        renderItem={renderItem}
        keyExtractor={item => item.Nombre}
      />
    </SafeAreaView>
  );
};

export default Lista;
