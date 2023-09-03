import React from 'react';
import { Text, View } from 'react-native';
import { Carrucel } from '../components/Carrucel';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentComponent from '../components/CommentComponent';
import DetailScreenStyles from '../../styles/DetailScreenStyles';
const DetailScreen = ({route}) => {
  const {house} = route.params;
  return (
    <View style={{ alignItems: 'center' }}>
      <Carrucel />
      <Text style={DetailScreenStyles.propietyName}>
        {house.title}
      </Text>

      <View style={{ alignItems: 'flex-start' }}>
        <Text>
          {' '}
          <EvilIcons name={'location'} size={24} color={'black'} />
          {house.address}
        </Text>
      </View>

      <View
        style={DetailScreenStyles.containerInfo}>
        <Text>
          <MaterialCommunityIcons
            name={'bed-queen-outline'}
            size={24}
            color={'black'}
          />
          {house.rooms}
        </Text>

        <Text>
          <MaterialCommunityIcons
            name={'bathtub-outline'}
            size={24}
            color={'black'}
          />
          {house.bathrooms}
        </Text>

        <Text>
          <MaterialCommunityIcons
            name={'social-distance-2-meters'}
            size={24}
            color={'black'}
          />
          {house.surface}mt²
        </Text>
      </View>

      <View style={DetailScreenStyles.descriptionConatiner}>
        <Text style={DetailScreenStyles.houseDescription}>House Description</Text>
        <Text>{house.description}</Text>
      </View>
      <View style={DetailScreenStyles.commentsContainer}>
        <Text style={DetailScreenStyles.commentsTitle}>Comments</Text>
        <CommentComponent />
        <CommentComponent />
      </View>
    </View>
  );
};

export default DetailScreen;
