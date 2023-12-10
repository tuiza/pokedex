
export type Type = {
  name: string;
  url: string;
};

export type PokemonTypes = {
  type: Type;
};


export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonTypes[];
};
