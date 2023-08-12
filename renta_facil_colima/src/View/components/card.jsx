import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles/CardStyle';

const Card = ({propiedad}) => {
  return (
    <View style={[styles.item]}>
      <View style={styles.columna1}>
        <Image style={styles.foto} source={require('../../assets/img/casa.jpg')} />
      </View>
      <View style={styles.columna2}>
        <Text style={styles.title}>{propiedad.Nombre}</Text>
        <Text style={styles.addres}>
          <Icon name="map-marker-outline" size={18} /> {propiedad.Dirección}
        </Text>
        <View style={styles.containerIcons}>
          <Icon name="bed-king-outline" size={18} color="black" />
          <Text style={styles.textIcons}>
            {propiedad['Número de habitaciones']}
          </Text>
          <Icon name="shower" size={18} color="black" />
          <Text style={styles.textIcons}>{propiedad['Número de baños']}</Text>
          <Icon name="texture-box" size={18} color="black" />
          <Text style={styles.textIcons}>{propiedad.Superficie} Mt2</Text>
        </View>
        <View style={styles.heartAndRentContainer}>
          <Text style={styles.rent}>
            ${propiedad['Costo de renta mensual']}/Mes
          </Text>
          <TouchableOpacity style={styles.heartContainer}>
            <Icon style={styles.heart} size={16} name={'heart'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



export default Card;
