import {StyleSheet} from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
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

  TitleComments: {
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
    fontFamily: 'ConcertOne-Regular',
    color: Colors.Black,
  },

  Comments: {
    padding: 5,
    width: '100%',
    justifyContent: 'space-between',
  },
  space: {
    height: 20,
  },
});

export default styles;
