import {StyleSheet} from 'react-native';
const CommentComponentStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#058C42',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'black',
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
    color: '#000',
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
