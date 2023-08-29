import React from 'react';
import {Text, View} from 'react-native';
import Lista from '../components/List';
import SearchBar from '../components/SearchBar';
import ReusableMainScreenStyle from '../../styles/ReusableMainScreenStyle';
import FiltersModal from '../components/FiltersModal';
import {ActivityIndicator} from 'react-native-paper';

import UseReusableMainScreenState from '../../hooks/UseReusableMainScreenState';

import AddHouse from '../../hooks/AddHouse';

const ReusableMainScreen = ({route}) => {
  const {screenType} = route.params;
  const {
    houses,
    search,
    setSearch,
    loading,
    modalVisible,
    cancelModalFunction,
    openFiltersModal,
    handleSearchFilter,
    handleSearch,
    screenColor,
  } = UseReusableMainScreenState(screenType);
  
  AddHouse("Colinas", "Armeria 763", "4", "1", "300", "3500")
  return (
    <View style={ReusableMainScreenStyle.mainContainer}>
      <FiltersModal
        modalVisible={modalVisible}
        cancelFunction={cancelModalFunction}
        onSearchFilter={handleSearchFilter}
      />
      <View style={ReusableMainScreenStyle.headerContainer}>
        {screenType === 'HOME' && (
          <SearchBar
            value={search}
            onChangeText={setSearch}
            openFilters={openFiltersModal}
            searchFunction={handleSearch}
          />
        )}
        {screenType !== 'HOME' && (
          <Text
            style={[
              ReusableMainScreenStyle.headerText,
              {color: screenColor(screenType)},
            ]}>
            {screenType === 'MYHOUSES' ? 'My houses' : 'My likes'}
          </Text>
        )}
      </View>
      {loading && (
        <View style={ReusableMainScreenStyle.loadingContainer}>
          <ActivityIndicator
            animating={true}
            color={screenColor()}
            size="large"
          />
        </View>
      )}
      {!loading && <Lista data={houses}/>}
    </View>
  );
};

export default ReusableMainScreen;
