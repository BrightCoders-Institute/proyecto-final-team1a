import {StyleSheet} from 'react-native';
import Colors from './Colors';

const DateSelectorStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
  },
  dateContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  datePickerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.White,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  datePickerLabel: {
    fontSize: 26,

    marginBottom: 10,
    fontFamily: 'ConcertOne-Regular',
  },
});
export default DateSelectorStyle;
