import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { type Pokemon } from 'src/@types/pokemon';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type IRoutesTypes = {
  Welcome: undefined;
  Home: undefined;
  Details: { pokemon: Pokemon };
};

export type DetailsProps = NativeStackNavigationProp<IRoutesTypes, 'Details'>;
export type HomeProps = NativeStackNavigationProp<IRoutesTypes, 'Home'>;
export type WelcomeProps = NativeStackNavigationProp<IRoutesTypes, 'Welcome'>;
