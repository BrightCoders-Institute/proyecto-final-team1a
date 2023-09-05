import {StyleSheet} from 'react-native';
import Colors from './Colors';

const ExtraInfostyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flex: 1,
    position: 'relative',
    
  },
  titleText: {
    color: Colors.SeaGreen,
    fontFamily: 'ConcertOne-Regular',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 40,
  },
  card:{
   
    alignSelf: 'center',
    backgroundColor: Colors.AshGray,
    width: 380,
    height: 655,
    marginTop: 40,
    borderRadius: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  buttonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  
    position: 'absolute', 
    left: 0,
    top: 498,
    right: 0,
    bottom: 0,
  },

  textinput: {
    backgroundColor: 'black',
  width: 380,
  height: 470,
  },

  perfilPhoto: {
    alignItems: 'center',
  },
  birthday: {
    padding: 10,

  }
});


export default ExtraInfostyle;