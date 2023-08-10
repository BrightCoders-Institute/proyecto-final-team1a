import {StyleSheet} from 'react-native';
const CommentComponentStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#058C42',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'ConcertOne',
    textAlign: 'center',
    textAlign: 'left',
  },
  comment: {
    fontSize: 24,
    textAlign: 'center',
    color: 'gray',
    textAlign: 'left',
  },
});

export default CommentComponentStyles;
