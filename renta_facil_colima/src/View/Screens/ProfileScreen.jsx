import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import styles from '../../styles/ProfileScreenStyle';
import SettingsButton from '../components/Settings';
import {Avatar} from 'react-native-paper';
import CommentComponent from '../components/CommentComponent';
import Card from '../components/card';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.BotonesInicio}>
        <SettingsButton />
      </View>
      <ScrollView>
        <View style={styles.ProfilePhoto}>
          <Avatar.Image
            backgroundColor="white"
            size={150}
            source={require('../../assets/img/google-logo.png')}
          />
          <Text style={styles.Nombre}>Geros de la Cruz Rodriguez</Text>
        </View>
        <View>
          <Text style={styles.TopHouses}>Top 5 casas de Geros</Text>
        </View>
        <Card propiedad={{title: 'Altozano'}} />
        <Card propiedad={{title: 'Altozano'}} />
        <Card propiedad={{title: 'Altozano'}} />
        <Card propiedad={{title: 'Altozano'}} />
        <Card propiedad={{title: 'Altozano'}} />
        <View style={styles.Comments}>
          <Text style={styles.TitleComments}> Opiniones sobre Geros </Text>
          <CommentComponent />
          <View style={styles.space} />
          <CommentComponent />
          <View style={styles.space} />
          <CommentComponent />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
