import {StyleSheet} from 'react-native';
import Colors from './Colors';

const HouseImageFormStyle = StyleSheet.create({
  button: {
    backgroundColor: Colors.White,
    height: 59,
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.SeaGreen,
    borderWidth: 1,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default HouseImageFormStyle;
