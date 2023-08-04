import {StyleSheet} from 'react-native';
const SearchBarStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#058C42',
    borderWidth: 1,
    width: 419,
    height: 49,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  input: {
    color: '#000',
    height: '100%',
    marginLeft: 10,
    width: '74%',
    fontSize: 24,
  },
  icon: {
    marginRight: 8,
  },
});

export default SearchBarStyles;
