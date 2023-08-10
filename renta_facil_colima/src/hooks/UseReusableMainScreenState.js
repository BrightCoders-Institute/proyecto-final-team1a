import {useState} from 'react';
import UseFiltersModalState from './UseFiltersModalState';

const UseReusableMainScreenState = () => {
  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState('');
  const {modalVisible, openModal, closeModal} = UseFiltersModalState();
  const [loading, setLoading] = useState(true);

  const cancelModalFunction = () => {
    closeModal();
  };

  const openFiltersModal = () => {
    openModal();
  };

  const handleSearchFilter = (functionSearchFilters) => {
    functionSearchFilters();
  };

  const handleSearch = () => {
    // Future logic to search
  }

  const getHouses = async (screenType) =>{
    // Future logic to get houser per type screen
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  const screenColor = (screenType) => {
    switch (screenType) {
      case 'HOME':
        return '#60DB98';
      case 'MYHOUSES':
        return '#84A9C0';
      case 'LIKES':
        return '#FF7477';
    }
  }

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
    getHouses,
    screenColor,
  }
}

export default UseReusableMainScreenState;