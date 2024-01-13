import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '@screens/Welcome';
import Home from '@screens/Home';
import Details from '@screens/Details';
import { type IRoutesTypes } from './types';

const Stack = createNativeStackNavigator<IRoutesTypes>();
export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen component={Welcome} name="Welcome" />
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Details} name="Details" />
    </Stack.Navigator>
  );
}
