export interface Type {
  name: string;
  url: string;
}

export interface PokemonTypes {
  type: Type;
}

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonTypes[];
}
