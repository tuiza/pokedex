import * as S from './styles';

import type { PokemonDetails } from '@types/pokemon';
import { useNavigation } from '@react-navigation/native';

export default function About({ pokemon }: { pokemon: PokemonDetails }) {
  return (
    <S.Container>
      <S.Info>
        <S.InfoText>sobre</S.InfoText>
        <S.Title color={pokemon.types[0].type.name}>Pokédex Data</S.Title>
        <S.InfoContainer>
          <S.InfoLine>
            <S.SubTitle>Species</S.SubTitle>
            <S.InfoText>{pokemon.species.name}</S.InfoText>
          </S.InfoLine>
          <S.InfoLine>
            <S.SubTitle>Height</S.SubTitle>
            <S.InfoText>{pokemon.height}</S.InfoText>
          </S.InfoLine>
          <S.InfoLine>
            <S.SubTitle>Weight</S.SubTitle>
            <S.InfoText>{pokemon.weight}</S.InfoText>
          </S.InfoLine>
          <S.InfoLine>
            <S.SubTitle>Abilities</S.SubTitle>
            <S.AbilitesContainer>
              <S.InfoText>1. {pokemon.abilities[0].ability.name}</S.InfoText>
              <S.InfoText size={15}>
                {pokemon.abilities.find((p) => p.is_hidden)?.ability.name} (hidden ability)
              </S.InfoText>
            </S.AbilitesContainer>
          </S.InfoLine>
          <S.InfoLine>
            <S.SubTitle>Weaknesses</S.SubTitle>
          </S.InfoLine>
        </S.InfoContainer>
        <S.Title color={pokemon.types[0].type.name}>Training</S.Title>
        <S.Title color={pokemon.types[0].type.name}>Breending</S.Title>
        <S.Title color={pokemon.types[0].type.name}>Location</S.Title>
      </S.Info>
    </S.Container>
  );
}
