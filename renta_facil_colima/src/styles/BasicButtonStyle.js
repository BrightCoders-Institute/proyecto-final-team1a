import { StyleSheet } from 'react-native';
import Colors from './colors';

const BasicButtonStyles = StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: Colors.White,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    letterSpacing: 0.25,
    fontFamily: 'ConcertOne-Regular',
  },
  shadow: {
    alignSelf: 'center',
    marginLeft: 4,
    borderRadius: 10,
    opacity: 0.35,
    zIndex: -1,
  },
});

export default BasicButtonStyles;