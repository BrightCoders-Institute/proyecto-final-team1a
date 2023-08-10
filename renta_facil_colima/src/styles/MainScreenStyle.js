import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#FFFFFF',
     },
     logo: {
       flex: 0,
       justifyContent: 'center',
       alignItems: 'center',
       position: 'absolute',
       top: 10,
       bottom: 20,
     },
     AppName: {
       textAlign: 'center',
     },
     Botones: {
       position: 'absolute', // Posición absoluta en relación con el contenedor principal
       bottom: 0, // Se coloca en la parte inferior
       left: 0, // Se ajusta a la izquierda
       right: 0, // Se ajusta a la derecha
       flexDirection: 'row', // Los componentes se colocarán en una fila
       justifyContent: 'space-between', // Espacio entre los componentes
       paddingHorizontal: 30, // Espacio horizontal
       paddingBottom: 60,
     },
   });

   export default styles;