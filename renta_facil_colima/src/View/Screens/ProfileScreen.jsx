import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import styles from '../../styles/ProfileScreenStyle';
import SettingsButton from '../components/Settings';
import {Avatar} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Card from '../components/card';
import CommentFormList from '../components/CommenstFormList';

const ProfileScreen = ({navigation}) => {
  const [houses, setHouses] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const handleAddComment = comment => {
    setComments([...comments, comment]);
  };
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.MainContainer, {paddingBottom: insets.bottom}]}>
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
        {houses.length > 0 ? (
          houses.map(house => <Card propiedad={house} key={house.id} />)
        ) : (
          <Text style={styles.TitleComments}>
            This uses don't have houses yet :{'('}
          </Text>
        )}
      </ScrollView>
      <View style={styles.Comments}>
        <CommentFormList
          label="Thoughts about"
          listMode={false}
          comments={comments}
          addComment={handleAddComment}
          screen={'PROFILE'}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
