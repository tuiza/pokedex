import { type Pokemon, type PokemonTypes } from '../types/Pokemon'
import api from './api'

interface RequestMoreInfo {
    id: string
    types: PokemonTypes[]
}

async function getMoroInfo(url: string): Promise<RequestMoreInfo> {
    const response = await api.get(url)
    const { id, types } = response.data
    return { id, types }
}

export async function getPokemonsService() {
            const response = await api.get('/pokemon')
            const { results } = response.data
            if (results) {
                const payloadPokemons = await Promise.all(
                    results.map(async (pokemon: Pokemon) => {
                        const { id, types } = await getMoroInfo(pokemon.url)
                        return {
                            name: pokemon.name,
                            id,
                            types,
                        }
                    })
                )
                return payloadPokemons
            }
    return []
}