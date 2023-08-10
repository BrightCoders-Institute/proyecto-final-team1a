import React from 'react';
import {Text, View} from 'react-native';
import Lista from '../Components/List';
import SearchBar from '../Components/SearchBar';
import ReusableMainScreenStyle from '../../Styles/ReusableMainScreenStyle';
import FiltersModal from '../Components/FiltersModal';
import {ActivityIndicator} from 'react-native-paper';

import UseReusableMainScreenState from '../../hooks/UseReusableMainScreenState';

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
    getHouses,
    screenColor,
  } = UseReusableMainScreenState();

  getHouses(screenType);
  
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
            color={screenColor(screenType)}
            size="large"
          />
        </View>
      )}
      {!loading && <Lista />}
    </View>
  );
};

export default ReusableMainScreen;
