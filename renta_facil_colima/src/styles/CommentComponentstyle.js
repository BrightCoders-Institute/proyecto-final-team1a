import {StyleSheet} from 'react-native';
import Colors from './colors';

const CommentComponentStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.SeaGreen,
    backgroundColor: Colors.White,
    borderRadius: 10,
    shadowColor: Colors.Black,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
    width: '95%',
  },
  titulo: {
    fontSize: 28,
    paddingTop: 3,
    marginLeft: 8,
    color: Colors.Black,
    fontFamily: 'ConcertOne-Regular',

  },
  comment: {
    marginLeft: 8,
    paddingBottom: 10,
    fontSize: 24,
    fontFamily: 'ConcertOne-Regular',
    color: 'gray',
  },
});

export default CommentComponentStyles;
