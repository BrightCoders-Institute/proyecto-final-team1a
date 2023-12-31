import React, {useEffect} from 'react';
import {Text, View,Button} from 'react-native';
import Lista from '../components/List';
import SearchBar from '../components/SearchBar';
import ReusableMainScreenStyle from '../../styles/ReusableMainScreenStyle';
import FiltersModal from '../components/FiltersModal';
import {ActivityIndicator} from 'react-native-paper';
import FormAdd from '../components/formAdd';
import UseReusableMainScreenState from '../../hooks/UseReusableMainScreenState';
import {FAB} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
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
    clearSearch,
    onRefresh,
    setHouses,
    refresh,
    setLoading,
    functionsGetData,
  } = UseReusableMainScreenState(screenType);
  const navigation = useNavigation();
  
  return (
    <View style={[ReusableMainScreenStyle.mainContainer, {marginBottom: 140}]}>
     <Button
        title='Refresh'
        onPress={()=>onRefresh()}
      />
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
            clearFunction={clearSearch}
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
      <Lista data={houses} refresh={refresh} />
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
