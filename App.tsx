
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@navigation/routes';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
