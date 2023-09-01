import {StyleSheet} from 'react-native';


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
        backgroundColor: 'green', // Color verde para el botón
        paddingHorizontal: 7,
        paddingVertical: 5,
        borderRadius: 15,
        elevation: 2,
        width: 30,
        height: 30,
        
      },
      textInput: {
        borderWidth: 2, // Ancho del borde
        borderColor: 'gray', // Color del borde
        borderRadius:  15, // Radio de borde
        padding: 5, // Espaciado interno
        paddingTop: 5,
        paddingBottom: 5,
        width: "50%",
        textAlign: "center",
      },
      Text: {
        textAlign: "center",

      },
      PlusContainer: {
        paddingLeft: 5,
      },






});
export default styles;

