import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View,Text} from 'react-native';
import GeolocationStles from '../../styles/GeolocationStyles';

export const GeolocationInput = () => {
    const [location, setLocation] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const API_URL='https://api.geoapify.com/v1/geocode/autocomplete?format=json&apiKey=2ca19b275b9d4a048e56ea6840e37501'
    useEffect(() => {
        if (location.trim() === '') {
            setResults([]);
            setShowResults(false);
            return;
        }
        fetch(`${API_URL}&text=${location}`)
            .then(response => response.json())
            .then(({ results: fetchedResults = [] }) => {
                const processedResults = fetchedResults.map(item => item.formatted);
                setResults(processedResults);
                setShowResults(processedResults.length > 0);
            })
            .catch(error => console.log('error', error));
    }, [location]);

    return <View style={{backgroundColor:'#FFF',marginLeft:10,marginRight:10,marginTop:20,width: 334,
    maxHeight: 300}}>
        <TextInput
            style={GeolocationStles.textInput}
            value={selectedItem || location}
            onChangeText={text => {
                setLocation(text);
                setSelectedItem(null);
            }}
        />
        {showResults && (
            <FlatList
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="handled"
                style={GeolocationStles.flatlistContainer}
                data={results}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={GeolocationStles.directionCard}
                        onPress={() => {
                            setSelectedItem(item);
                            setResults([]);
                            setShowResults(false);
                        }}>
                        <Text style={GeolocationStles.directionText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        )}
    </View>
};

export default GeolocationInput