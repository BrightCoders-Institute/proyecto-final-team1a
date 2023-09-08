import React from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import CommentComponent from './CommentComponent';
import UtilsStyle from '../../styles/UtilsStyle';
import CommentsFormListStyle from '../../styles/CommentsFormListStyle';
import CommentModalForm from './CommentModalForm';

const CommenstFormList = ({label, comments, addComment, listMode}) => {
  return (
    <View>
      <View style={[UtilsStyle.rowCenteredXY]}>
        <Text style={CommentsFormListStyle.label}>{label}</Text>
        {!listMode && (
          <View style={CommentsFormListStyle.buttonAdd}>
            <CommentModalForm addComment={addComment} />
          </View>
        )}
      </View>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <CommentComponent
            text={item.userName}
            date={item.created.toDate().toDateString()}
            comment={item.comment}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CommenstFormList;
