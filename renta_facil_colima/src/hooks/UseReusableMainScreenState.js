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
  const [housesCopy, setHousesCopy] = useState([]);
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
    HOME: GetDataFromCollection('Houses', 'created'),
    MYHOUSES: GetDataFromCollection('Houses', 'created', null, null, [
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
      setHousesCopy(response);
      setLoading(false);
    };
    getHouses();
  }, []);

  const cancelModalFunction = async () => {
    const response = await GetDataFromCollection('Houses', 'created');
    setHouses([]);
    setHouses(response);
    setHousesCopy(response);
    closeModal();
  };

  const openFiltersModal = () => {
    openModal();
  };

  const handleSearchFilter = async functionSearchFilters => {
    const filters = functionSearchFilters();
    const orderBy = filters.some(filter => filter.field === 'rent')
      ? 'rent'
      : 'created';
    const response = await GetDataFromCollection(
      'Houses',
      orderBy,
      null,
      null,
      filters,
    );
    setHouses([]);
    setHouses(response);
    setHousesCopy(response);
    closeModal();
  };

  const handleSearch = () => {
    const filteredHouses = housesCopy.filter(house => {
      const houseTitleSearch = house.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const houseDescriptionSearch = house.description
        .toLowerCase()
        .includes(search.toLowerCase());
      const houseAddressSearch = house.address
        .toLowerCase()
        .includes(search.toLowerCase());
      return houseTitleSearch || houseDescriptionSearch || houseAddressSearch;
    });
    setHouses(filteredHouses);
  };

  const clearSearch = () => {
    setSearch('');
    setHouses(housesCopy);
  };

  const addHouseFunction = values => {
    handleAddHouse(values, setLoading, getScreenHouses);
  };

  const getScreenHouses = async () => {
    const response = await functionsGetData[screenType];
    setHouses(response);
    setHousesCopy(response);
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
    clearSearch,
  };
};

export default UseReusableMainScreenState;
