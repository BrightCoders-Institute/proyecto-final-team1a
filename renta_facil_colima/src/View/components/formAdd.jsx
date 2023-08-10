import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styleForm from '../../styles/formAddStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper';
import styles from '../../styles/CardStyle';

const FormAdd = () => {
  return (
    <View style={styleForm.mainContainer}>
      <Text style={styleForm.title}>Agregar una renta</Text>
      <View style={styleForm.formContainer}>
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
            <TextInput
              style={styleForm.inputs}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={'black'}
            />
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
              <Icon size={50} name={'plus-box'} style={styleForm.iconPlus} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styleForm.btnImage}>
            <Text style={{color: 'black'}}>Agregar una imagen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FormAdd;
