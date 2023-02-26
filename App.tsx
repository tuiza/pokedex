import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavigationContainer>
        <Routes/>
    </NavigationContainer>
      </ThemeProvider>
  );
}
