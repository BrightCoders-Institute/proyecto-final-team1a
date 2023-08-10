//import 'react-native-gesture-handler';
import React from 'react';
import FormAdd from './src/View/components/formAdd';
/*import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import {
  configureFonts,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';

const fontsConfig = {
  android: {
    regular: {
      fontFamily: 'ConcertOne-Regular',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontsConfig),
};
*/
function App() {
  return (
    <FormAdd />
    /*
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </PaperProvider>*/
  );
}

export default App;
