import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const UseLikeHouse = (house, userId) => {
  const [liked, SetLike] = useState(false);
  const houseRef = firestore().collection('Houses').doc(house.id);
  const UserLikesRef = firestore().collection('UsersLikes').doc(userId);

  useEffect(() => {
    if (house.likes && house.likes.includes(userId)) {
      SetLike(true);
      return;
    }
    SetLike(false);
  }, []);

  const HandleLikePress = async () => {
    const {batch, like} = liked ? DislikeHouse() : await LikeHouse();
    try {
      await batch.commit();
      handleLocalLikes(like);
    } catch (e) {
      Alert.alert('Error with like', e.message);
    }
  };

  const DislikeHouse = () => {
    let batch = firestore().batch();
    batch.update(houseRef, {
      likes: firestore.FieldValue.arrayRemove(userId),
    });
    batch.update(UserLikesRef, {
      likes: firestore.FieldValue.arrayRemove(house.id),
    });
    return {
      batch: batch,
      like: false,
    };
  };

  const handleLocalLikes = cond => {
    SetLike(cond);
    if (cond) {
      if (house.likes === undefined) {
        house.likes = [];
      }
      house.likes.push(userId);
    } else {
      const index = house.likes.indexOf(userId);
      house.likes.splice(index, 1);
    }
  };

  const LikeHouse = async () => {
    let batch = firestore().batch();
    batch = await UserLikeBatchOperation(batch);
    batch.update(houseRef, {
      likes: firestore.FieldValue.arrayUnion(userId),
    });
    return {
      batch: batch,
      like: true,
    };
  };

  const UserLikeBatchOperation = async batch => {
    const UserLikesSnapshot = await UserLikesRef.get();
    if (UserLikesSnapshot.exists) {
      batch.update(UserLikesRef, {
        likes: firestore.FieldValue.arrayUnion(house.id),
      });
    } else {
      batch.set(UserLikesRef, {
        likes: firestore.FieldValue.arrayUnion(house.id),
      });
    }
    return batch;
  };

  const likeColor = () => {
    return liked ? '#FF7477' : '#00b074';
  };

  return {HandleLikePress, likeColor};
};
export default UseLikeHouse;
