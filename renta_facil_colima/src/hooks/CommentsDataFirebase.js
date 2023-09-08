import firestore from '@react-native-firebase/firestore';
import GetCurrentUser from './GetCurrentUser';
import GetCurrentUserData from './GetCurrentUserData';
import {Alert} from 'react-native';

const CommentsDataFirebase = () => {
  const user = GetCurrentUser();

  const CreateComment = async (typePost, comment, postId) => {
    const userData = await GetCurrentUserData();
    try {
      const docRef = await firestore().collection('Comments').add({
        comment: comment,
        typePost: typePost,
        postId: postId,
        userName: userData.firstName,
        userId: user.uid,
        created: firestore.FieldValue.serverTimestamp(),
      });
      const commentData = await docRef.get();
      if (commentData.exists) {
        const newComment = {
          id: commentData.id,
          ...commentData.data(),
        };
        return newComment;
      } else {
        Alert.alert(
          'Error getting comment',
          'We could not get the new comment',
        );
      }
    } catch (e) {
      Alert.alert('Error creating comment', e.message);
    }
  };

  const GetComments = async (typePost, postId) => {
    try {
      const commentsCollection = await firestore()
        .collection('Comments')
        .where('typePost', '==', typePost)
        .where('postId', '==', postId)
        .orderBy('created', 'desc')
        .get();
      const comments = [];
      commentsCollection.forEach(documentSnapshot => {
        const comment = {
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        };
        comments.push(comment);
      });
      return comments;
    } catch (e) {
      console.log(e.message);
      Alert.alert('Error getting comments', e.message);
    }
  };

  return {
    CreateComment,
    GetComments,
  };
};

export default CommentsDataFirebase;
