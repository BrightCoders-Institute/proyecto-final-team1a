import {useState, useEffect} from 'react';
import UseFiltersModalState from './UseFiltersModalState';
import GetDataFromFirebase from './GetDataFromFirebase';
import GetCurrentUser from './GetCurrentUser';
import GetUserLikes from './GetUserLikes';
import FormSendHouse from './formSendHouse';

const UseReusableMainScreenState = screenType => {
  const user = GetCurrentUser();
  const {GetDataFromCollection} = GetDataFromFirebase();
  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState('');
  const {modalVisible, openModal, closeModal} = UseFiltersModalState();
  const [loading, setLoading] = useState(true);
  const {openHouseForm, isVisible, closeHouseForm, handleAddHouse} =
    FormSendHouse();

  const myHousesFilter = {
    field: 'userId',
    operator: '==',
    value: user.uid,
  };

  const functionsGetData = {
    HOME: GetDataFromCollection('Houses', 'created', 6),
    MYHOUSES: GetDataFromCollection('Houses', 'created', 6, null, [
      myHousesFilter,
    ]),
    LIKES: GetUserLikes(),
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

  const addHouseFunction = values => {
    handleAddHouse(values, setLoading, getScreenHouses);
  };

  const getScreenHouses = async () => {
    const response = await functionsGetData[screenType];
    setHouses(response);
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
    openHouseForm,
    isVisible,
    closeHouseForm,
    addHouseFunction,
  };
};

export default UseReusableMainScreenState;
