import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import SplashScreen from './SplashScreen'; // Ajusta la ruta según tu ubicación
import { MainScreen } from './MainScreen';

const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Simula un tiempo de carga (puedes cambiar esto por tu lógica real de carga)
    setTimeout(() => {
      setAppReady(true);
    }, 3000); // Ejemplo: 3 segundos

    // Agregar cualquier otra lógica de inicialización aquí

  }, []);

  return (
    <View style={{ flex: 1 }}>
      {appReady ? <MainScreen /> : <SplashScreen />}
    </View>
  );
};

export default App;
