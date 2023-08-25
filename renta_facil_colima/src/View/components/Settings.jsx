import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const SettingsButton = () => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity >
            <Icon name= "setting" size={35}/>
        </TouchableOpacity>
    );
};

export default SettingsButton;