import {StyleSheet} from 'react-native';
import Colors from './Colors';

const UtilsStyle = StyleSheet.create({
  errorText: {
    color: Colors.Red,
    textAlign: 'center',
    fontFamily: 'ConcertOne-Regular',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  rowCentered: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default UtilsStyle;
