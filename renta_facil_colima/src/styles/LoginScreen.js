import {StyleSheet} from 'react-native';

const Loginstyles = StyleSheet.create({
  buttonsContainer:{
    marginVertical: 35,
  },
  inputs: {
    color: 'black',
    overflow: 'hidden',
    textAlign: 'center',
    fontFamily: 'ConcertOne-Regular',
    fontSize: 24,
  },
  shadow: {    
    alignItems: 'center',
    marginTop:25, 
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '80%',
    height: 49,
    elevation: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#FFF',
  },
  logoContainer: {
    marginBottom: 20,
  },
});
export default Loginstyles;
