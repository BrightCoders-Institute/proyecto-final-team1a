import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import styles from '../../styles/ProfileScreenStyle';
import UtilsStyle from '../../styles/UtilsStyle';
import SettingsButton from '../components/Settings';
import {Avatar, ActivityIndicator} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Card from '../components/card';
import CommentFormList from '../components/CommenstFormList';
import UseProfileScreenState from '../../hooks/UseProfileScreenState';
import GetCurrentUser from '../../hooks/GetCurrentUser';

const ProfileScreen = ({route}) => {
  const user =
    route.params && route.params.user ? route.params.user : GetCurrentUser();
  const {houses, profileData, comments, handleAddComment, loading} =
    UseProfileScreenState(user);
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.MainContainer, {paddingBottom: insets.bottom}]}>
      <View style={styles.BotonesInicio}>
        <SettingsButton />
      </View>
      {loading && (
        <View style={UtilsStyle.loadingContainer}>
          <ActivityIndicator animating={true} color="#CDB4DB" size="large" />
        </View>
      )}
      {!loading && (
        <View>
          <ScrollView>
            <View style={styles.ProfilePhoto}>
              <Avatar.Image
                backgroundColor="white"
                size={150}
                source={{uri: profileData.profilePicture}}
              />
              <Text style={styles.Nombre}>
                {profileData.firstName} {profileData.lastName}
              </Text>
            </View>
            <View>
              <Text style={styles.TopHouses}>
                Top {houses.length} houses of {profileData.firstName}
              </Text>
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
              label={`Thoughts about ${profileData.firstName}`}
              listMode={false}
              comments={comments}
              addComment={handleAddComment}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
