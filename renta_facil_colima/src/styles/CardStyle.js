import {StyleSheet} from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 16,
    width: '90%',
    height: 140,
    backgroundColor: Colors.AliceBlue,
    marginBottom: 20,
  },
  img: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  rowMargin: {
    flex: 1,
    flexDirection: 'row',
    margin: 15,
  },
  col: {
    flex: 2,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 20,
    color: Colors.RaisinBlack,
    fontWeight: '500',
  },
  textIcon: {
    marginRight: 15,
    fontSize: 16,
  },
  textBold: {
    color: Colors.RaisinBlack,
    fontWeight: 'bold',
  },
  textAddress: {
    color: 'gray',
    fontSize: 14,
  },
  textPrice: {
    fontSize: 20,
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;
