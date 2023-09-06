import React from 'react';
import {Text, View} from 'react-native';
import Textinput from '../components/Textinput';
import BasicButton from '../buttons/BasicButton';
import {Formik, Field, ErrorMessage} from 'formik';
import ExtraInfoState from '../../hooks/ExtraInfoState';
import ExtraInfostyle from '../../styles/ExtraInfoStyle';
import DateSelector from '../components/DateSelector';
import PerfilPhoto from '../components/PerfilPhoto';

const ExtraInfo = () => {
  const {extraInfoSchemaFormInitialValues, extraInfoSchema} = ExtraInfoState();

  const handleSubmit = (values, {setSubmitting, resetForm}) => {
    setSubmitting(false);
    resetForm();
  };

  const handleCancel = formik => {
    formik.resetForm();
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
                        onChange={date => setFieldValue('birthday', date)}
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
