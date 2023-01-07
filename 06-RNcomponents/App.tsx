import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import { StackNavigator } from './src/navigator/StackNavigator';


const App = () => {
  return (
    <AppState>
        <StackNavigator />
    </AppState>
  );
};



const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  );
};
export default App;
