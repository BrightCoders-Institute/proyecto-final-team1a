import {StyleSheet} from 'react-native';

const Loginstyles = StyleSheet.create({
  inputs: {
    color: 'black',
    overflow: 'hidden',
    width: '100%',
    textAlign: 'center'
  },
  shadow: {    alignItems: 'center',
    marginTop:25, 
    borderWidth: 1,

    borderColor: 'green',
    backgroundColor: 'white',
    borderRadius: 8,
    height: 40,
    width:280,
    elevation: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center', // Centrar contenido verticalmente
    paddingHorizontal: 16,
    flex: 1,
  },
});
export default Loginstyles;
