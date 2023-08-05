import {useState} from 'react';
import {Alert} from 'react-native';

const UseFiltersModalState = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [roomsNumber, setRoomsNumber] = useState('');
  const [bathsNumber, setBathsNumber] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');
  const numbersRegex = /^[0-9]*\.?[0-9]+$/;

  const searchFilters = () => {
    if (ValidateModalFields()) {
      // Future logic to search with filters
      return true;
    } else {
      return false;
    }
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const ValidateModalFields = () => {
    if (roomsNumber !== '' && !numbersRegex.test(roomsNumber)) {
      Alert.alert('Error', 'Rooms must be a positive number');
      return false;
    }
    if (bathsNumber !== '' && !numbersRegex.test(bathsNumber)) {
      Alert.alert('Error', 'Baths must be a positive number');
      return false;
    }
    if (minPrice !== '' && !numbersRegex.test(minPrice)) {
      Alert.alert('Error', 'Min price must be a positive number');
      return false;
    }
    if (maxPrice !== '' && !numbersRegex.test(maxPrice)) {
      Alert.alert('Error', 'Max price must be a positive number');
      return false;
    }
    if (
      minPrice !== '' &&
      maxPrice !== '' &&
      parseFloat(minPrice) > parseFloat(maxPrice)
    ) {
      Alert.alert('Error', 'Min price must be less than max price');
      return false;
    }
    return true;
  };

  return {
    modalVisible,
    setModalVisible,
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
    openModal,
    closeModal,
  };
};

export default UseFiltersModalState;
