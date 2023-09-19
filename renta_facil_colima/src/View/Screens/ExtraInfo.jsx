import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Textinput from '../components/Textinput';
import BasicButton from '../buttons/BasicButton';
import {Formik, Field, ErrorMessage} from 'formik';
import ExtraInfoState from '../../hooks/ExtraInfoState';
import ExtraInfostyle from '../../styles/ExtraInfoStyle';
import DateSelector from '../components/DateSelector';
import PerfilPhoto from '../components/PerfilPhoto';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ExtraInfo = ({navigation}) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const toggleDatePicker = () => {
    setIsDatePickerVisible(!isDatePickerVisible);
  };

  const {extraInfoSchemaFormInitialValues, extraInfoSchema} = ExtraInfoState();

  const handleSubmit = async (values, {setSubmitting, resetForm}) => {
    try {
      const user = auth().currentUser;

      if (user) {
        const userDocRef = firestore()
          .collection('UserExtraInfo')
          .doc(user.uid);

        const userData = {
          address: values.address,
          birthday: values.birthday,
          activeAccount: true,
          profilePicture: values.profilePicture,
        };

        const docSnapshot = await userDocRef.get();
        if (docSnapshot.exists) {
          await userDocRef.update(userData);
        } else {
          await userDocRef.set(userData);
        }

        setSubmitting(false);
        resetForm();
        
      }
      navigation.navigate('HomeTabs');
    } catch (error) {
      console.error('Error al guardar la información en Firestore:', error);
    }
  };

  return (
    <View style={ExtraInfostyle.container}>
      <View style={ExtraInfostyle.card}>
        <Text style={ExtraInfostyle.titleText}>PROFILE INFORMATION</Text>
        <Formik
          initialValues={extraInfoSchemaFormInitialValues}
          validationSchema={extraInfoSchema}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            resetForm,
            setFieldValue,
          }) => (
            <View>
              <View style={ExtraInfostyle.address}>
                <Field
                  name="address"
                  component={Textinput}
                  placeholder="Address"
                  margen={15}
                  altura={49}
                  padding={10}
                  width={350}
                  value={values.address}
                  onChangeText={handleChange('address')}
                />
                {errors.address && touched.address && (
                  <Text style={ExtraInfostyle.errorText}>{errors.address}</Text>
                )}
              </View>

              <View style={ExtraInfostyle.birthday}>
                <View style={ExtraInfostyle.birthday}>
                  <Field name="birthday">
                    {() => (
                      <DateSelector
                        name="birthday"
                        isDatePickerVisible={isDatePickerVisible}
                        toggleDatePicker={toggleDatePicker}
                        selectedDate={values.birthday}
                        onDateChange={date => {
                          setFieldValue('birthday', date);
                          toggleDatePicker();
                        }}
                      />
                    )}
                  </Field>
                </View>
                <ErrorMessage name="birthday">
                  {msg => <Text style={ExtraInfostyle.errorText}>{msg}</Text>}
                </ErrorMessage>
              </View>

              <View style={ExtraInfostyle.perfilPhoto}>
                <Field name="profilePicture" component={PerfilPhoto} />
                {errors.profilePicture && touched.address && (
                  <Text style={ExtraInfostyle.errorText}>
                    {errors.profilePicture}
                  </Text>
                )}
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
                  onPress={() => {
                    resetForm();
                    setFieldValue('profilePicture', '');
                  }}
                />
                <BasicButton
                  text={'Sign Up'}
                  backgroundColor="#FFF"
                  textSize={20}
                  textColor={'#00D25D'}
                  height={59}
                  width={150}
                  borderColor={'#058C42'}
                  shadow={true}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default ExtraInfo;
