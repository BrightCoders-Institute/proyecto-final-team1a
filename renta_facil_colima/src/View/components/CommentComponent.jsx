import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/CommentComponentstyle';

const CommentComponent = ({text, comment}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> {text}</Text>
      <Text style={styles.comment}> {comment} </Text>
    </View>
  );
};

export default CommentComponent;
