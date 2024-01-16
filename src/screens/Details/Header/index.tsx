import * as S from './styles';

import type { PokemonDetails } from '@types/pokemon';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { TypeText, TypeWrapper, TypesContainer } from '@components/Card/styles';

export default function Header({ pokemon }: { pokemon: PokemonDetails }) {
  const navigation = useNavigation();
  return (
    <S.Container type={pokemon.types[0].type.name}>
      <S.BackButton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" size={33} color="#fff" />
      </S.BackButton>
      <S.Header>
        <S.PokemonImage />
        <S.Info>
          <S.Number type={pokemon.types[0].type.name}>#00{pokemon.id.toLocaleString()}</S.Number>
          <S.Title>{pokemon.name}</S.Title>
          <TypesContainer>
            {pokemon.types.map((type) => (
              <TypeWrapper key={type.type.name} type={type.type.name}>
                <TypeText type={type.type.name}>{type.type.name}</TypeText>
              </TypeWrapper>
            ))}
          </TypesContainer>
        </S.Info>
      </S.Header>
    </S.Container>
  );
}
