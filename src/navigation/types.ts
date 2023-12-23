import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { type Pokemon } from 'src/@types/pokemon';
import type { RouteProp } from '@react-navigation/native';


// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type IRoutesTypes = {
  Welcome: undefined;
  Home: undefined;
  Details: { pokemonId: Pokemon['id'] };
};

export type DetailsProps = NativeStackNavigationProp<IRoutesTypes, 'Details'>;
export type HomeProps = NativeStackNavigationProp<IRoutesTypes, 'Home'>;
export type WelcomeProps = NativeStackNavigationProp<IRoutesTypes, 'Welcome'>;

export type DetailsRouteProps = RouteProp<IRoutesTypes, 'Details'>;