import React, {useEffect, useState} from 'react';
import {FlatList, TextInput, TouchableOpacity, View, Text} from 'react-native';
import GeolocationStles from '../../styles/GeolocationStyles';
import Config from 'react-native-config';
import {useFormikContext} from 'formik';

export const GeolocationInput = () => {
  const {values, setFieldValue} = useFormikContext();
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const API_URL =
    'https://api.geoapify.com/v1/geocode/autocomplete?format=json&apiKey=' +
    Config.GEOAPIFY_KEY;
  useEffect(() => {
    if (values.address.trim() === '') {
      setResults([]);
      setShowResults(false);
      return;
    }
    fetch(`${API_URL}&text=${values.address}`)
      .then(response => response.json())
      .then(({results: fetchedResults = []}) => {
        const processedResults = fetchedResults.map(item => ({
          address: item.formatted,
          latitude: item.lat,
          longitude: item.lon,
        }));
        setResults(processedResults);
        setShowResults(processedResults.length > 0);
      })
      .catch(error => console.log('error', error));
  }, [values.address]);

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 10,
        marginTop: 20,
        width: 334,
        maxHeight: 300,
      }}>
      <TextInput
        style={GeolocationStles.textInput}
        value={values.address}
        onChangeText={text => {
          setFieldValue('address', text);
          setFieldValue('latitude', null);
          setFieldValue('longitude', null);
        }}
      />
      {showResults && (
        <FlatList
          scrollEnabled={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          style={GeolocationStles.flatlistContainer}
          data={results}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={GeolocationStles.directionCard}
              onPress={() => {
                setFieldValue('address', item.address);
                setFieldValue('latitude', item.latitude);
                setFieldValue('longitude', item.longitude);
                setResults([]);
                setShowResults(false);
              }}>
              <Text style={GeolocationStles.directionText}>{item.address}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default GeolocationInput;
