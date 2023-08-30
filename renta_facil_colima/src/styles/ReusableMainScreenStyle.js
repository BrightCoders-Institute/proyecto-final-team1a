import {StyleSheet} from 'react-native';
import Colors from './Colors';
const ReusableMainScreenStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.White,
  },
  headerContainer: {
    alignSelf: 'center',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  headerText: {
    fontSize: 40,
    fontFamily: 'ConcertOne-Regular',
    color: Colors.Black,
  },
  loadingContainer: {
    backgroundColor: Colors.White,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 15,
    borderRadius: 10,
    backgroundColor: '#84A9C0',
  },
});

export default ReusableMainScreenStyle;
