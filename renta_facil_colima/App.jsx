import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationTheme,
} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
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

const navTheme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    background: '#fff',
  },
};

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
          <NavigationContainer theme={navTheme}>
            <MainNavigation />
          </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
