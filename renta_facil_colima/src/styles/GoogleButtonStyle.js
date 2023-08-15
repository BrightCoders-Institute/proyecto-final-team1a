import { StyleSheet } from 'react-native';
import Colors from './Colors';

const GoogleButtonStyles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.FeldGrau,
    backgroundColor: Colors.White,
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
    color:Colors.BattleShipGrey,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default GoogleButtonStyles;
