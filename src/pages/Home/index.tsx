import { useEffect, useState } from 'react';
import * as S from './styles'
import Card from '../../components/Card';
import { FlatList } from 'react-native';
import { FadeAnimation } from '../../components/Fade';
import { Pokemon } from '../../types/Pokemon';
import { getPokemonsService } from '../../service/pokemons';

export default function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const getPokemons = async () => {
        const pokemonsReponse = await getPokemonsService();
        setPokemons(pokemonsReponse);
    }

    useEffect(() => {
        getPokemons();
    }, [])
    
    
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Pokédex</S.Title>
                <S.SubTitle>Procure por Pokémon pelo nome ou usando o Número Nacional da Pokédex. </S.SubTitle>
            </S.TitleContainer>
            <S.Filter
                placeholder='Qual Pokémon você está procurando?'
                placeholderTextColor='gray'
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={pokemons}
                keyExtractor={pokemon => pokemon.name}
                renderItem={({ item }) =>
                    <FadeAnimation>
                        <Card pokemon={item} />
                    </FadeAnimation>}

            />
        </S.Container>
    )
}