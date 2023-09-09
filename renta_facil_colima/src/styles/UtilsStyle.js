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
  rowCenteredVertical: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenteredXY: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loadingContainer: {
    backgroundColor: Colors.White,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aligSelfEnd: {
    alignSelf: 'flex-end',
  },
});

export default UtilsStyle;
