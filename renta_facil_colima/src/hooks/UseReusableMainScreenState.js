import {useState, useEffect} from 'react';
import UseFiltersModalState from './UseFiltersModalState';
import GetDataFromFirebase from './GetDataFromFirebase';

const UseReusableMainScreenState = screenType => {
  const {GetDataFromCollection} = GetDataFromFirebase();
  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState('');
  const {modalVisible, openModal, closeModal} = UseFiltersModalState();
  const [loading, setLoading] = useState(true);

  const functionsGetData = {
    HOME: GetDataFromCollection('Houses', 'created', 6),
    MYHOUSES: GetDataFromCollection('Houses'), //Replace for my houses when function is ready
    LIKES: GetDataFromCollection('Houses'), // Replace for my likes when function is ready
  };

  const homeColors = {
    HOME: '#60DB98',
    MYHOUSES: '#84A9C0',
    LIKES: '#FF7477',
  };

  useEffect(() => {
    const getHouses = async () => {
      const response = await functionsGetData[screenType];
      setHouses(response);
      setLoading(false);
    };
    getHouses();
  }, []);

  const cancelModalFunction = () => {
    closeModal();
  };

  const openFiltersModal = () => {
    openModal();
  };

  const handleSearchFilter = functionSearchFilters => {
    functionSearchFilters();
  };

  const handleSearch = () => {
    // Future logic to search
  };

  const screenColor = () => {
    return homeColors[screenType];
  };

  return {
    houses,
    search,
    setSearch,
    modalVisible,
    loading,
    setLoading,
    cancelModalFunction,
    openFiltersModal,
    handleSearchFilter,
    handleSearch,
    screenColor,
  };
};

export default UseReusableMainScreenState;
