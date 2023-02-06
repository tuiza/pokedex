import React, { useEffect, useState } from 'react';
import * as S from './styles'
import api from '../../service/api' 

type PokemonTypes = {
    type: string
}
type Pokemon = {
    name: string
    url: string
    id: number
    types: PokemonTypes[]
}
type RequestMoreInfo = {
    id: string
    types: PokemonTypes[]
}

export default function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    async function getMoroInfo(url: string): Promise<RequestMoreInfo> {
        const response = await api.get(url)
        const { id, types } = response.data
        return {id, types}
    }
    useEffect(() => {
        async function getPokemons() {
            const response = await api.get('/pokemon')
            const { results } = response.data
            if (results) {
                const payloadPokemons = await Promise.all(
                    results.map(async (pokemon: Pokemon) => {
                        console.log(pokemon)
                        const { id, types } = await getMoroInfo(pokemon.url)
                        return {
                            name: pokemon.name,
                            id,
                            types,
                        }
                    })
                
                    )
                    setPokemons(payloadPokemons)
            }
        }
        getPokemons()
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
          {pokemons.map(pokemon => 
              <S.SubTitle>{pokemon.name}</S.SubTitle>
          )}
     </S.Container>        
  )
}