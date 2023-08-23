import {StyleSheet} from 'react-native';
import Colors from './Colors';

const Loginstyles = StyleSheet.create({
  buttonsContainer: {
    marginVertical: 35,
  },
  inputs: {
    color: Colors.Black,
    textAlign: 'center',
    fontFamily: 'ConcertOne-Regular',
    fontSize: 24,
    marginTop: 25,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: Colors.White,
    borderRadius: 10,
    height: 49,
    elevation: 10,
  },
  errorText: {
    color: Colors.Red,
    textAlign: 'center',
    fontFamily: 'ConcertOne-Regular',
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: Colors.White,
  },
  logoContainer: {
    marginBottom: 20,
  },
  text: {
    fontFamily: 'ConcertOne-Regular',
    fontSize: 16,
    alignSelf: 'center',
    color: Colors.Black,
  },
  hiperLinkText: {
    color: Colors.Jade,
    textDecorationLine: 'underline',
  },
});
export default Loginstyles;
