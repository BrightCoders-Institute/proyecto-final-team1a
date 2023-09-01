import React from 'react';
import { Text, View } from 'react-native';
import { Carrucel } from '../components/Carrucel';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentComponent from '../components/CommentComponent';
import DetailScreenStyles from '../../styles/DetailScreenStyles';
const DetailScreen = () => {

  return (
    <View style={{ alignItems: 'center' }}>
      <Carrucel />
      <Text style={DetailScreenStyles.propietyName}>
        Propiety Name
      </Text>

      <View style={{ alignItems: 'flex-start' }}>
        <Text>
          {' '}
          <EvilIcons name={'location'} size={24} color={'black'} />
          House Location
        </Text>
      </View>

      //En un futuro esta parte se llenara con la informacion en firebase
      <View
        style={DetailScreenStyles.containerInfo}>
        <Text>
          <MaterialCommunityIcons
            name={'bed-queen-outline'}
            size={24}
            color={'black'}
          />
          4
        </Text>

        <Text>
          <MaterialCommunityIcons
            name={'bathtub-outline'}
            size={24}
            color={'black'}
          />
          3
        </Text>

        <Text>
          <MaterialCommunityIcons
            name={'social-distance-2-meters'}
            size={24}
            color={'black'}
          />
          24mtr
        </Text>
      </View>

      <View style={DetailScreenStyles.descriptionConatiner}>
        <Text style={DetailScreenStyles.houseDescription}>House Description</Text>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, expedita amet id accusantium eos nostrum eveniet voluptates, sequi quisquam excepturi repellat molestiae porro incidunt quis illum laborum, laudantium voluptatibus maxime.</Text>
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
