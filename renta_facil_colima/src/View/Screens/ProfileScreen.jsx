import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/ProfileScreenStyle';
import UtilsStyle from '../../styles/UtilsStyle';
import SettingsButton from '../components/Settings';
import {Avatar, ActivityIndicator} from 'react-native-paper';
import List from '../components/List';
import CommentFormList from '../components/CommenstFormList';
import UseProfileScreenState from '../../hooks/UseProfileScreenState';
import GetCurrentUser from '../../hooks/GetCurrentUser';

const ProfileScreen = ({route}) => {
  const user =
    route.params && route.params.user ? route.params.user : GetCurrentUser();
  const {houses, profileData, comments, handleAddComment, loading} =
    UseProfileScreenState(user);
  return (
    <View style={[styles.MainContainer]}>
      {loading && (
        <View style={UtilsStyle.loadingContainer}>
          <ActivityIndicator animating={true} color="#CDB4DB" size="large" />
        </View>
      )}
      {!loading && (
        <View style={{flex: 1}}>
          <View style={styles.ProfilePhoto}>
            <View style={UtilsStyle.aligSelfEnd}>
              <SettingsButton />
            </View>
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
          <View style={styles.housesContainer}>
            {houses.length > 0 ? (
              <List data={houses} />
            ) : (
              <Text style={styles.TopHouses}>
                This uses don't have houses yet :{'('}
              </Text>
            )}
          </View>
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
