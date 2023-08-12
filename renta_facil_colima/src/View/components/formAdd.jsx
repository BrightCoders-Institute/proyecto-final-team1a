import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styleForm from '../../styles/formAddStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDow from './dropDown';
import FormSendHouse from '../../hooks/formSendHouse';
const FormAdd = () => {
  const {
    toggleVisibility,
    setTitle,
    setLocation,
    setRooms,
    setDescription,
    setPrice,
    isVisible,
    titlle,
    lcoation,
    rooms,
    Description,
    price,
  } = FormSendHouse();
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
              <Text style={styleForm.text}>Titulo</Text>
              <TextInput
                style={styleForm.inputs}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={'black'}
                onChangeText={setTitle}
              />
            </View>
            <View>
              <Text style={styleForm.text}>Ubicacion</Text>
              <TextInput
                onChange={setLocation}
                style={styleForm.inputs}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styleForm.doubleInputs}>
              <View style={styleForm.tipo}>
                <Text style={styleForm.text}>Tipo</Text>
                <DropDow />
              </View>
              <View style={styleForm.cuartos}>
                <Text style={styleForm.text}>Cuartos</Text>
                <TextInput
                  onChangeText={setRooms}
                  style={styleForm.inputs}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={'black'}
                />
              </View>
            </View>
            <View>
              <Text style={styleForm.text}> Descripción</Text>
              <TextInput
                onChangeText={setDescription}
                style={styleForm.inputs}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styleForm.doubleInputs}>
              <View style={styleForm.precioContainer}>
                <Text style={styleForm.text}>Precio</Text>
                <TextInput
                  onChangeText={setPrice}
                  style={styleForm.inputs}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={'black'}
                />
              </View>
              <View style={styleForm.iconContainer}>
                <Text style={styleForm.text}>Etiqueta</Text>
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
