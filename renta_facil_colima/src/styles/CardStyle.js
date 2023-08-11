import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    backgroundColor: '#f5fdff',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foto: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  columna1: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  columna2: {
    flex: 2,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  addres: {
    color: '#2d2d2d',
    fontSize: 15,
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcons: {
    marginRight: 15,
    marginLeft: 8,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  heartAndRentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartContainer: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#00b074',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
  },
  heart: {
    color: 'white',
  },
  rent: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
