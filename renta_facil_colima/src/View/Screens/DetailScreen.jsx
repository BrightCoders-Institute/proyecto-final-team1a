import React from 'react';
import {Text, View} from 'react-native';
import {Carrucel} from '../components/Carrucel';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailScreenStyles from '../../styles/DetailScreenStyles';
import CommentFormList from '../components/CommenstFormList';
import UseDetailScreenState from '../../hooks/UseDetailScreenState';

const DetailScreen = ({route}) => {
  const {house} = route.params;
  const {comments, handleAddComment} = UseDetailScreenState(house.id);
  return (
    <View style={{alignItems: 'center'}}>
      <Carrucel images={house.images} />
      <Text style={DetailScreenStyles.propietyName}>{house.title}</Text>
      <View style={{alignItems: 'flex-start'}}>
        <Text>
          {' '}
          <EvilIcons name={'location'} size={24} color={'black'} />
          {house.address}
        </Text>
      </View>
      <View style={DetailScreenStyles.containerInfo}>
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
        <Text style={DetailScreenStyles.houseDescription}>
          House Description
        </Text>
        <Text>{house.description}</Text>
      </View>
      <View style={DetailScreenStyles.commentsContainer}>
        <View style={{flex: 1, marginBottom: 150}}>
          <CommentFormList
            label="Comments"
            listMode={false}
            comments={comments}
            addComment={handleAddComment}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;
