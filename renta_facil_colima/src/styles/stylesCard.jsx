import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    backgroundColor: '#E9F2F8',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foto: {
    top: 15,
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  columna1: {
    flex: 1,
    width: 100,
    alignItems: 'center',
  },
  columna2: {
    flex: 2,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  addres: {color: 'black'},
  containerIcons: {
    flexDirection: 'row', // Mostrar los elementos en una sola línea
    alignItems: 'center',
  },
  textIcons: {
    marginRight: 15, // Agregar un pequeño espacio entre los íconos y los textos
    fontSize: 15,
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
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
  },
  heart: {
    color: 'white',
  },
  rent: {
    color: 'black',
  },
});

export default styles;