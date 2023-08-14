import {StyleSheet} from 'react-native';
import Colors from './Colors';

const SearchBarStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: Colors.SeaGreen,
    borderWidth: 1,
    height: 49,
    alignItems: 'center',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  input: {
    color: Colors.Black,
    height: '100%',
    marginLeft: 10,
    width: '74%',
    fontSize: 24,
    fontFamily: 'ConcertOne-Regular'
  },
  icon: {
    marginRight: 8,
  },
});

export default SearchBarStyles;
