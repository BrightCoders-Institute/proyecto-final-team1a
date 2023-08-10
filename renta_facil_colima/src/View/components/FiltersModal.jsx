import React from 'react';
import {Modal, Text, View} from 'react-native';
import FiltersModalStyle from '../../Styles/FiltersModalStyle';
import Textinput from './Textinput';
import UseFiltersModalState from '../../hooks/UseFiltersModalState';
import BasicButton from '../buttons/BasicButton';

const FiltersModal = ({cancelFunction, modalVisible, onSearchFilter}) => {
  const {
    roomsNumber,
    setRoomsNumber,
    bathsNumber,
    setBathsNumber,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    location,
    setLocation,
    searchFilters,
  } = UseFiltersModalState();
  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={FiltersModalStyle.modalView}>
        <View style={FiltersModalStyle.inputCol}>
          <Textinput
            altura={49}
            value={roomsNumber}
            onChangeText={setRoomsNumber}
            placeholder="Rooms number"
          />
        </View>
        <View style={FiltersModalStyle.inputCol}>
          <Textinput
            altura={49}
            value={bathsNumber}
            onChangeText={setBathsNumber}
            placeholder="Bathrooms number"
          />
        </View>
        <View style={FiltersModalStyle.inputRow}>
          <View style={FiltersModalStyle.inputCol2}>
            <Textinput
              altura={49}
              value={minPrice}
              onChangeText={setMinPrice}
              placeholder="Min price"
            />
          </View>
          <Text style={FiltersModalStyle.inputSeparator}>-</Text>
          <View style={FiltersModalStyle.inputCol2}>
            <Textinput
              altura={49}
              value={maxPrice}
              onChangeText={setMaxPrice}
              placeholder="Max price"
            />
          </View>
        </View>
        <View style={FiltersModalStyle.inputCol}>
          <Textinput
            altura={49}
            value={location}
            onChangeText={setLocation}
            placeholder="Address"
          />
        </View>
        <View style={FiltersModalStyle.row}>
          <BasicButton
            text="Cancel"
            onPress={() => cancelFunction()}
            textSize={20}
            borderColor="#058C42"
            backgroundColor="#04471C"
            height={59}
            elevation={10}
            textColor="#FFF"
            width={150}
            shadow={true}
            shadowColor="#0f9444"
          />
          <BasicButton
            text="Filter"
            onPress={() => onSearchFilter(searchFilters)}
            textSize={20}
            borderColor="#058C42"
            backgroundColor="#FFF"
            height={59}
            elevation={10}
            textColor="#00D25D"
            width={150}
            shadow={true}
            shadowColor="#0f9444"
          />
        </View>
      </View>
    </Modal>
  );
};

export default FiltersModal;
