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
        <Text style={styles.title}>{propiedad.title}</Text>
        <Text style={styles.addres}>
          <Icon name="map-marker-outline" size={18} /> {propiedad.address}
        </Text>
        <View style={styles.containerIcons}>
          <Icon name="bed-king-outline" size={18} color="black" />
          <Text style={styles.textIcons}>
            {propiedad.rooms}
          </Text>
          <Icon name="shower" size={18} color="black" />
          <Text style={styles.textIcons}>{propiedad.bathrooms}</Text>
          <Icon name="texture-box" size={18} color="black" />
          <Text style={styles.textIcons}>{propiedad.surface} Mt2</Text>
        </View>
        <View style={styles.heartAndRentContainer}>
          <Text style={styles.rent}>
            ${propiedad.rent}/Mes
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
