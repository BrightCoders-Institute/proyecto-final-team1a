import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({propiedad}) => {
  return (
    <View style={[styles.item]}>
      <View style={styles.columna1}>
        <Image style={styles.foto} source={require('../assets/img/casa.jpg')} />
      </View>
      <View style={styles.columna2}>
        <Text style={styles.title}>{propiedad.Nombre}</Text>
        <Text style={styles.addres}>
          <Icon name="map-marker-outline" size={15} /> {propiedad.Dirección}
        </Text>
        <View style={styles.containerIcons}>
          <Icon name="bed-king-outline" size={15} color="black" />
          <Text style={styles.textIcons}>
            {propiedad['Número de habitaciones']}
          </Text>
          <Icon name="shower" size={15} color="black" />
          <Text style={styles.textIcons}>{propiedad['Número de baños']}</Text>
          <Icon name="texture-box" size={15} color="black" />
          <Text style={styles.textIcons}>{propiedad.Superficie} Mt2</Text>
        </View>
        <View style={styles.heartAndRentContainer}>
          <Text style={styles.rent}>
            ${propiedad['Costo de renta mensual']}/Mes
          </Text>
          <TouchableOpacity style={styles.heartContainer}>
            <Icon style={styles.heart} size={12} name={'heart'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    backgroundColor: '#E9F2F8',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foto: {
    top: 15,
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  columna1: {
    flex: 1,
    width: 100,
    alignItems: 'center',
  },
  columna2: {
    flex: 2,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  addres: {color: 'black'},
  containerIcons: {
    flexDirection: 'row', // Mostrar los elementos en una sola línea
    alignItems: 'center',
  },
  textIcons: {
    marginRight: 15, // Agregar un pequeño espacio entre los íconos y los textos
    fontSize: 15,
    color: 'black',
  },
  heartAndRentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartContainer: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
  },
  heart: {
    color: 'white',
  },
  rent: {
    color: 'black',
  },
});

export default Card;
