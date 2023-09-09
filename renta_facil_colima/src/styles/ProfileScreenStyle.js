import {StyleSheet} from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  BotonesInicio: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    backgroundColor: Colors.Malachite,
  },
  ProfilePhoto: {
    alignItems: 'center',
    borderColor: 'blue',
    backgroundColor: Colors.Malachite,
    borderRadius: 20,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
    marginTop: -16,
    height: 250
  },
  Nombre: {
    fontSize: 24,
    color: Colors.Black,
    width: 200,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'ConcertOne-Regular',
  },
  TopHouses: {
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    fontFamily: 'ConcertOne-Regular',
    color: Colors.Black,
  },
  Comments: {
    width: '100%',
    height: '35%',
  },
  housesContainer: {
    height: '35%',
  },
});

export default styles;
