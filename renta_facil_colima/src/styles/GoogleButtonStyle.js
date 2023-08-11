import { StyleSheet } from 'react-native';
const GoogleButtonStyles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#3B5547',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 308,
    height: 74,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
    fontSize: 24,
    fontFamily: 'ConcertOne-Regular',
    color:'#8C8C8C',
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default GoogleButtonStyles;
