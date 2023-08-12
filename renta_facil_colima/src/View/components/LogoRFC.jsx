import React from 'react';
import {View, Image, Text} from 'react-native';
import LogoRFCStyle from '../../styles/LogoRFCStyle';

const LogoRFC = ({showAppName}) => {
    return (
    <View>
        <Image
        source={require('../../assets/img/LogoRFC.png')}
        style={{width: 200, height: 200}}
        />
        {showAppName && <Text style={LogoRFCStyle.AppName}>Renta Facil</Text>}
    </View>
    );
};

export default LogoRFC;
