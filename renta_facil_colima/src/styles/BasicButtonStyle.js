import { StyleSheet } from 'react-native';
const BasicButtonStyles = StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 0.25,
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