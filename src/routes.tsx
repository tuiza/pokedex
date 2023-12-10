import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen component={Welcome} name="Welcome" />
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Home} name="Details" />
    </Stack.Navigator>
  );
}
