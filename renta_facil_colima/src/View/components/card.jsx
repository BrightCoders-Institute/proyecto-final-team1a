import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/CardStyle';
import UtilsStyle from '../../styles/UtilsStyle';
import GetCurrentUser from '../../hooks/GetCurrentUser';
import LikeButton from '../buttons/LikeButton';
import {useNavigation} from '@react-navigation/native';

const Card = ({propiedad}) => {
  const navigation = useNavigation();
  const user = GetCurrentUser();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('HouseDetail', {house: propiedad})}>
      <View style={styles.rowMargin}>
        <ImageBackground
          source={require('../../assets/img/casa.jpg')}
          style={styles.img}
        />
        <View style={styles.col}>
          <Text style={styles.textTitle}>{propiedad.title}</Text>
          <View style={UtilsStyle.row}>
            <Octicons
              style={styles.icon}
              name="location"
              size={20}
              color="#000000"
            />
            <Text style={styles.textAddress}>{propiedad.address}</Text>
          </View>
          <View style={UtilsStyle.row}>
            <Ionicons
              style={styles.icon}
              name="bed-outline"
              color="gray"
              size={20}
            />
            <Text style={[styles.textBold, styles.textIcon]}>
              {propiedad.rooms}
            </Text>
            <MaterialCommunityIcons
              style={styles.icon}
              name="bathtub-outline"
              color="gray"
              size={20}
            />
            <Text style={[styles.textBold, styles.textIcon]}>
              {propiedad.bathrooms}
            </Text>
            <MaterialCommunityIcons
              style={styles.icon}
              name="floor-plan"
              color="gray"
              size={20}
            />
            <Text style={[styles.textBold, styles.textIcon]}>
              {propiedad.surface} mt²
            </Text>
          </View>
          <View style={UtilsStyle.rowSpaceBetween}>
            <Text style={[styles.textBold, styles.textPrice]}>
              ${propiedad.rent}/m
            </Text>
            {user.uid !== propiedad.userId && (
              <LikeButton propiedad={propiedad} />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
