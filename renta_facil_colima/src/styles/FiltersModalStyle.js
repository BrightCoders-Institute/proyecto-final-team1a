import {StyleSheet} from 'react-native';
import Colors from './Colors';

const FiltersModalStyle = StyleSheet.create({
  inputCol: {
    marginBottom: 28,
  },
  inputCol2: {
    width: 155,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 28,
    justifyContent: 'space-around',
  },
  inputSeparator: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.DarkSpringGreen,
    marginHorizontal: 16,
  },
  modalView: {
    alignSelf: 'center',
    backgroundColor: Colors.Malachite,
    borderRadius: 10,
    margin: 20,
    padding: 35,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 433,
    width: 414,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default FiltersModalStyle;
