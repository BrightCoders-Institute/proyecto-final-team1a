import {useState, useEffect} from 'react';
import CommentsDataFirebase from './CommentsDataFirebase';

const UseDetailScreenState = houseId => {
  const [comments, setComments] = useState([]);
  const {GetComments, CreateComment} = CommentsDataFirebase();

  useEffect(() => {
    const getHouseData = async () => {
      const commentsData = await GetComments('HOUSE', houseId);
      setComments(commentsData);
    };
    getHouseData();
  }, []);

  const handleAddComment = async comment => {
    const commentObject = await CreateComment('HOUSE', comment, houseId);
    if (commentObject) {
      setComments([commentObject, ...comments]);
    }
  };

  return {
    comments,
    handleAddComment,
  };
};

export default UseDetailScreenState;
