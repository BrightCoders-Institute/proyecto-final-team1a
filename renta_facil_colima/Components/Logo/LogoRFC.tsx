import React from 'react';
import {View, Image} from 'react-native';

const LogoRFC = () => {
    return (
    <View>
    <Image
        source={require('../../Components/Logo/LogoRFC.png')}
        style={{width: 200, height: 200}} // Ajusta el ancho y alto según tus necesidades
    />
    </View>
);
};

export default LogoRFC;
