import {StyleSheet} from 'react-native';

const SignUpScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  titleText: {
    color: '#058C42',
    fontFamily: 'ConcertOne-Regular',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 40,
  },
  card:{
    alignSelf: 'center',
    backgroundColor: '#C6D4CD',
    width: 380,
    height: 470,
    marginTop: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  buttonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
});

export default SignUpScreenStyle;