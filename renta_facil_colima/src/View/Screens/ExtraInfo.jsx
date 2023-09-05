import React from 'react';
import {Text, View} from 'react-native';
import Textinput from '../components/Textinput';
import BasicButton from '../buttons/BasicButton';
import UtilsStyle from '../../styles/UtilsStyle';
import {Formik} from 'formik';
import ExtraInfoState from '../../hooks/ExtraInfoState';
import ExtraInfostyle from '../../styles/ExtraInfoStyle';
import DateSelector from '../components/DatePicker';
import PerfilPhoto from '../components/PerfilPhoto';

const ExtraInfo = () => {
  return (
    <View style={ExtraInfostyle.container}>
      <View style={ExtraInfostyle.card}>
        <Text style={ExtraInfostyle.titleText}>PROFILE INFORMATION</Text>
        <View>
          <View style={ExtraInfostyle.address}>
            <Textinput
              placeholder="Address"
              margen={15}
              altura={49}
              padding={10}
              width={350}
            />
          </View>

          <View style={ExtraInfostyle.birthday}>
            <DateSelector />
          </View>

          <View style={ExtraInfostyle.perfilPhoto}>
            <PerfilPhoto />
          </View>
          <View style={ExtraInfostyle.buttonsContainer}>
            <BasicButton
              text={'Cancel'}
              backgroundColor="#FFF"
              textSize={20}
              textColor={'#9E9A9A'}
              height={59}
              width={150}
              borderColor={'#B1F1D1'}
            />
            <BasicButton
              text={'Sing Up'}
              backgroundColor="#FFF"
              textSize={20}
              textColor={'#00D25D'}
              height={59}
              width={150}
              borderColor={'#058C42'}
              shadow={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExtraInfo;
