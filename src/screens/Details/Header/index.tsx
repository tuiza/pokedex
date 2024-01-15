import * as S from './styles';

import type { PokemonDetails } from '@types/pokemon';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

export default function Header({ pokemon }: { pokemon: PokemonDetails }) {
  const navigation = useNavigation();
  return (
    <S.Container>
      {/* <S.BackButton
        onPress={() => {
          navigation.goBack();
        }}
      ></S.BackButton> */}
      <Ionicons name="arrow-back" size={25} color="#fff" />
      <S.Header color={pokemon.types[0].type.name}>
        <S.Title>{pokemon.name}</S.Title>
        <S.Title color={pokemon.types[0].type.name}>#{pokemon.id}</S.Title>
      </S.Header>
    </S.Container>
  );
}
