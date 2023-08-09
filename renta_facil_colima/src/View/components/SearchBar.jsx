import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SearchBarStyles from '../../Styles/SearchBarStyle';

const SearchBar = ({value, onChangeText, openFilters, searchFunction}) => {
  return (
    <View style={SearchBarStyles.container}>
      <TextInput
        style={SearchBarStyles.input}
        placeholder="Buscar"
        placeholderTextColor="#8c8c8c"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={openFilters}>
        <FontAwesome name="filter" size={39} color="#000" style={SearchBarStyles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={searchFunction}>
        <Feather name="search" size={39} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
