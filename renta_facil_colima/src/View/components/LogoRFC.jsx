import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const LogoRFC = ({showAppName}) => {
    return (
    <View>
        <Image
        source={require('../../assets/img/LogoRFC.png')}
        style={{width: 200, height: 200}}
        />
        {showAppName && <Text style={styles.AppName}>Renta Facil</Text>}
    </View>
    );
};

export default LogoRFC;

const styles = StyleSheet.create({
    AppName: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 100,
    },
});
