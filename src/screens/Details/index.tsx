import { useRoute } from '@react-navigation/native';
import * as S from './styles';
import { type DetailsRouteProps } from '@navigation/types';
import { useEffect, useState } from 'react';
import { getPokemonDetailsService } from '@services/pokemons';
import { Alert } from 'react-native';
import type { PokemonDetails } from '@types/pokemon';

export default function Details(): JSX.Element {
  const route = useRoute<DetailsRouteProps>();
  const { pokemonId } = route.params;
  const [pokemon, setPokemon] = useState<PokemonDetails>([]);
  const [loading, setLoading] = useState(true);

  const getPokemonDetails = async () => {
    try {
      setLoading(true);
      const response = await getPokemonDetailsService(pokemonId);
      setPokemon(response);
    } catch (error) {
      Alert.alert('Erro ao buscar detalhes do pokemon');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  /*   const pokemonData = [
    {
      title: 'Species',
      info: pokemon.species.name,
    },
    {
      title: 'Height',
      info: pokemon.height,
    },
    {
      title: 'Weight',
      info: pokemon.weight,
    },
  ];
 */

  return (
    <S.Container>
      {!loading && (
        <>
          <S.Header color={pokemon.types[0].type.name}>
            <S.Title color={pokemon.types[0].type.name}>{pokemon.name}</S.Title>
            <S.Title color={pokemon.types[0].type.name}>#{pokemon.id}</S.Title>
          </S.Header>
          <S.Content>
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
          </S.Content>
        </>
      )}
    </S.Container>
  );
}
