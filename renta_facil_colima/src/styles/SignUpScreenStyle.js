import {StyleSheet} from 'react-native';
import Colors from './colors';

const SignUpScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  titleText: {
    color: Colors.SeaGreen,
    fontFamily: 'ConcertOne-Regular',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 40,
  },
  card:{
    alignSelf: 'center',
    backgroundColor: Colors.AshGray,
    width: 380,
    height: 470,
    marginTop: 40,
    borderRadius: 10,
    shadowColor: Colors.Black,
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