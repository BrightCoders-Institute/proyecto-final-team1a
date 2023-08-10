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
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  inputs: {
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
    height: 25,
    borderRadius: 10,
  },
});

export default styleForm;
