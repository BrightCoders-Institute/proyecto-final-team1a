import {useState, useEffect} from 'react';
import GetDataFromFirebase from './GetDataFromFirebase';
import GetCurrentUserData from './GetCurrentUserData';
import CommentsDataFirebase from './CommentsDataFirebase';

const UseProfileScreenState = user => {
  const [houses, setHouses] = useState([]);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    profilePicture: '',
  });
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const {GetDataFromCollection} = GetDataFromFirebase();
  const {CreateComment, GetComments} = CommentsDataFirebase();

  const housesFilters = [{field: 'userId', operator: '==', value: user.uid}];

  useEffect(() => {
    const getProfileData = async () => {
      const housesData = await GetDataFromCollection(
        'Houses',
        'created',
        5,
        null,
        housesFilters,
      );
      const profile = await GetCurrentUserData();
      const commentsData = await GetComments('PROFILE', user.uid);
      setHouses(housesData);
      setComments(commentsData);
      setProfileData(profile);
      setLoading(false);
    };
    getProfileData();
  }, []);

  const handleAddComment = async comment => {
    const commentObject = await CreateComment('PROFILE', comment, user.uid);
    if (commentObject) {
      setComments([...comments, commentObject]);
    }
  };

  return {
    houses,
    comments,
    loading,
    profileData,
    handleAddComment,
  };
};

export default UseProfileScreenState;
