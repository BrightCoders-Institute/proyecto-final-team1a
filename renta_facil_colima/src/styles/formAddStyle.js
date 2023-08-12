import {StyleSheet} from 'react-native';

const styleForm = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    whith: '100',
    justifyContent: 'center', // Centrar contenido verticalmente
    paddingHorizontal: 30,
  },
  text: {
    color: 'black',
    fontFamily: 'ConcertOne-Regular',
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'ConcertOne-Regular',
  },
  formContainer: {
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  inputs: {
    color: 'black',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  doubleInputs: {
    flexDirection: 'row', // Distribuir elementos en una fila
    alignItems: 'center',
  },
  tipo: {
    flex: 2,
    padding: 5,
  },
  cuartos: {
    flex: 1,
    padding: 5,
  },
  iconPlus: {color: 'black'},
  precioContainer: {
    flex: 2,
  },
  iconContainer: {
    flex: 1,
    marginLeft: 12,
  },
  btnImage: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 15,
    width: 180,
    height: 30,
    borderRadius: 10,
    color: '#fff',
    padding: 5,
    fontWeight: 'bold',
  },
  btn: {
    fontSize: 12,
    fontFamily: 'ConcertOne-Regular',
    color: 'black',
  },
  containerBtnSend: {
    alignItems: 'center',
  },
  btnSend: {
    backgroundColor: '#3B5547',
    alignItems: 'center',
    marginTop: 15,
    width: 180,
    height: 30,
    borderRadius: 10,
    color: '#fff',
    padding: 5,
    fontWeight: 'bold',
  },
  iconClose: {
    position: 'absolute',
    top: -20,
    right: -20,
  },
});

export default styleForm;