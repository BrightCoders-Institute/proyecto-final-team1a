import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styleForm from '../../styles/formAddStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDow from './dropDown';
import FormSendHouse from '../../hooks/formSendHouse';
const FormAdd = () => {
  const {toggleVisibility, isVisible} = FormSendHouse();
  return (
    <View style={styleForm.mainContainer}>
      {isVisible && (
        <View>
          <Text style={styleForm.title}>Agregar una renta</Text>
          <View style={styleForm.formContainer}>
            <View style={styleForm.iconClose}>
              <TouchableOpacity onPress={toggleVisibility}>
                <Icon size={50} name={'close-circle-outline'} color="#900" />
              </TouchableOpacity>
            </View>
            <View>
              <Text>Titulo</Text>
              <TextInput
                style={styleForm.inputs}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={'black'}
              />
            </View>
            <View>
              <Text>Ubicacion</Text>
              <TextInput
                style={styleForm.inputs}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styleForm.doubleInputs}>
              <View style={styleForm.tipo}>
                <Text>Tipo</Text>
                <DropDow />
              </View>
              <View style={styleForm.cuartos}>
                <Text>Cuartos</Text>
                <TextInput
                  style={styleForm.inputs}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={'black'}
                />
              </View>
            </View>

            <View>
              <Text>Descripción</Text>
              <TextInput
                style={styleForm.inputs}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styleForm.doubleInputs}>
              <View style={styleForm.precioContainer}>
                <Text>Precio</Text>
                <TextInput
                  style={styleForm.inputs}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={'black'}
                />
              </View>
              <View style={styleForm.iconContainer}>
                <Text>Etiqueta</Text>
                <TouchableOpacity>
                  <Icon
                    size={50}
                    name={'plus-box'}
                    style={styleForm.iconPlus}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styleForm.btnImage}>
                <Text style={styleForm.btn}>Agregar una imagen</Text>
              </TouchableOpacity>
            </View>
            <View style={styleForm.containerBtnSend}>
              <TouchableOpacity style={styleForm.btnSend}>
                <Text style={styleForm.btn}>Guardar Casa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      <TouchableOpacity onPress={toggleVisibility}>
        <Icon size={50} name={'close-circle-outline'} color="#900" />
      </TouchableOpacity>
    </View>
  );
};

export default FormAdd;
