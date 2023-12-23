import { useRoute } from '@react-navigation/native';
import * as S from './styles';
import { type DetailsRouteProps } from '@navigation/types';
import { useEffect, useState } from 'react';
import { getPokemonDetailsService } from '@services/pokemons';
import { Alert } from 'react-native';
import type {PokemonDetails} from '@types/pokemon';


export default function Details(): JSX.Element {
  const route = useRoute<DetailsRouteProps>();
  const { pokemonId } = route.params;
  const [pokemon, setPokemon] = useState<PokemonDetails>([]);
  const [loading, setLoading] = useState(true);


  const getPokemonDetails = async () => {
    try {
      setLoading(true);
      const response = await getPokemonDetailsService(pokemonId) 
      setPokemon(response);
      
    }
    catch (error) {
      Alert.alert('Erro ao buscar detalhes do pokemon');
    }
    finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    getPokemonDetails();
  }
  , []);
  return (
    <S.Container>
      {!loading && (
        <S.Title>{pokemon.id}</S.Title>
      )}

    </S.Container>
  );
}
