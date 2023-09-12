import React from 'react';
import {Modal, View, ScrollView} from 'react-native';
import {Card, Headline, Text, HelperText} from 'react-native-paper';
import Textinput from './Textinput';
import styleForm from '../../styles/formAddStyle';
import FormSendHouse from '../../hooks/formSendHouse';
import UtilsStyle from '../../styles/UtilsStyle';
import BasicButton from '../buttons/BasicButton';
import Colors from '../../styles/Colors';
import GeolocationInput from './GeolocationInput';
import {Formik} from 'formik';
const FormAdd = ({visibility, sendHouse, cancel}) => {
  const {formSchema, formInitialValues} = FormSendHouse();
  return (
    <Modal animationType="slide" transparent={false} visible={visibility}>
      <View style={styleForm.mainContainer}>
        <Headline style={styleForm.title}>Add a new house</Headline>
        <Formik
          initialValues={formInitialValues}
          onSubmit={(values, actions) => {
            sendHouse(values);
            actions.resetForm();
          }}
          validationSchema={formSchema}
          onReset={() => cancel()}>
          {({handleChange, handleReset, handleSubmit, values, errors}) => (
            <ScrollView>
              <Card style={styleForm.cardStyle}>
                <Card.Content>
                  <Text style={styleForm.inputText}>Title</Text>
                  <Textinput
                    altura={53}
                    padding={10}
                    margen={20}
                    value={values.title}
                    onChangeText={handleChange('title')}
                  />
                  <HelperText
                    type="error"
                    visible={errors.title}
                    style={[UtilsStyle.errorText, styleForm.localError]}>
                    {errors.title}
                  </HelperText>
                  <Text style={styleForm.inputText}>Description</Text>
                  <Textinput
                    altura={53}
                    padding={10}
                    margen={20}
                    value={values.description}
                    onChangeText={handleChange('description')}
                  />
                  <HelperText
                    type="error"
                    visible={errors.description}
                    style={[UtilsStyle.errorText, styleForm.localError]}>
                    {errors.description}
                  </HelperText>
                  <View style={UtilsStyle.row}>
                    <View style={styleForm.col50}>
                      <Text style={styleForm.inputTextRow}>Rooms</Text>
                      <Textinput
                        altura={53}
                        padding={10}
                        margen={10}
                        value={values.rooms}
                        onChangeText={handleChange('rooms')}
                      />
                      <HelperText
                        type="error"
                        visible={errors.rooms}
                        style={[UtilsStyle.errorText, styleForm.localError]}>
                        {errors.rooms}
                      </HelperText>
                    </View>
                    <View style={styleForm.col50}>
                      <Text style={styleForm.inputTextRow}>Bathrooms</Text>
                      <Textinput
                        altura={53}
                        padding={10}
                        margen={10}
                        value={values.bathrooms}
                        onChangeText={handleChange('bathrooms')}
                      />
                      <HelperText
                        type="error"
                        visible={errors.bathrooms}
                        style={[UtilsStyle.errorText, styleForm.localError]}>
                        {errors.bathrooms}
                      </HelperText>
                    </View>
                  </View>
                  <Text style={styleForm.inputText}>Address</Text>
                  <GeolocationInput />
                  <HelperText
                    type="error"
                    visible={errors.address}
                    style={[UtilsStyle.errorText]}>
                    {errors.address}
                  </HelperText>
                  <View style={UtilsStyle.row}>
                    <View style={styleForm.col50}>
                      <Text style={styleForm.inputTextRow}>Surface</Text>
                      <Textinput
                        altura={53}
                        padding={10}
                        margen={10}
                        value={values.surface}
                        onChangeText={handleChange('surface')}
                      />
                      <HelperText
                        type="error"
                        visible={errors.surface}
                        style={[UtilsStyle.errorText, styleForm.localError]}>
                        {errors.surface}
                      </HelperText>
                    </View>
                    <View style={styleForm.col50}>
                      <Text style={styleForm.inputTextRow}>
                        Price per month
                      </Text>
                      <Textinput
                        altura={53}
                        padding={10}
                        margen={10}
                        value={values.rent}
                        onChangeText={handleChange('rent')}
                      />
                      <HelperText
                        type="error"
                        visible={errors.rent}
                        style={[UtilsStyle.errorText, styleForm.localError]}>
                        {errors.rent}
                      </HelperText>
                    </View>
                  </View>
                  <View style={UtilsStyle.rowSpaceAround}>
                    <BasicButton
                      onPress={handleReset}
                      text="Cancel"
                      textSize={18}
                      backgroundColor={Colors.White}
                      borderColor={Colors.Red}
                      textColor={Colors.Red}
                      height={59}
                      width={140}
                    />
                    <BasicButton
                      text="Add"
                      textSize={18}
                      backgroundColor={Colors.White}
                      borderColor={Colors.Malachite}
                      textColor={Colors.Malachite}
                      height={59}
                      width={140}
                      onPress={handleSubmit}
                    />
                  </View>
                </Card.Content>
              </Card>
            </ScrollView>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default FormAdd;
