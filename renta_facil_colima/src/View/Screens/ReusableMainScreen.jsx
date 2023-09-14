import React from 'react';
import {Text, View} from 'react-native';
import Lista from '../components/List';
import SearchBar from '../components/SearchBar';
import ReusableMainScreenStyle from '../../styles/ReusableMainScreenStyle';
import FiltersModal from '../components/FiltersModal';
import {ActivityIndicator} from 'react-native-paper';
import FormAdd from '../components/formAdd';
import UseReusableMainScreenState from '../../hooks/UseReusableMainScreenState';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FAB} from 'react-native-paper';
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
    openHouseForm,
    isVisible,
    closeHouseForm,
    addHouseFunction,
  } = UseReusableMainScreenState(screenType);

  const insets = useSafeAreaInsets();

  return (
    <View style={[ReusableMainScreenStyle.mainContainer, {marginBottom: 140}]}>
      {screenType === 'HOME' && (
        <FiltersModal
          modalVisible={modalVisible}
          cancelFunction={cancelModalFunction}
          onSearchFilter={handleSearchFilter}
        />
      )}
      {screenType === 'MYHOUSES' && (
        <FormAdd
          visibility={isVisible}
          cancel={closeHouseForm}
          sendHouse={addHouseFunction}
        />
      )}
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
      {!loading && <Lista data={houses} />}
      {screenType === 'MYHOUSES' && (
        <FAB
          style={ReusableMainScreenStyle.fab}
          color="#FFFF"
          icon="plus"
          onPress={openHouseForm}
        />
      )}
    </View>
  );
};

export default ReusableMainScreen;
