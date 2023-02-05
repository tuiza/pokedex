import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import Welcome from './src/pages/Welcome';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Welcome/>
  </ThemeProvider>
  );
}
