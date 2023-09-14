import {StyleSheet} from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  Chip: {
    borderRadius: 20,
    elevation: 4,
    margin: 4,
    paddingBottom: 1,
  },
  container: {
    width: 200, // Cambia el ancho del botón
    height: 60, // Cambia la altura del botón
    paddingTop: 7,
  },

  contenedor: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 7,
    flexDirection: 'row', // Alinea el icono y el texto en fila
  },

  button: {
    backgroundColor: Colors.Malachite,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 15,
    elevation: 2,
    width: 30,
    height: 30,
  },
  textInput: {
    height: 53,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 5,
    paddingTop: 5,
    paddingBottom: 5,
    width: '80%',
    textAlign: 'center',
  },
  Text: {
    textAlign: 'center',
  },
  PlusContainer: {
    paddingLeft: 5,
  },
});
export default styles;
