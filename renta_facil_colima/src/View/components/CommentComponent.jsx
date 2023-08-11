import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/CommentComponentstyle';

const CommentComponent = ({text, comment, date}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{text} - {date}</Text>
      <Text style={styles.comment}>{comment} </Text>
    </View>
  );
};

export default CommentComponent;
