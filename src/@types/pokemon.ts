import type theme from 'src/global/theme';

export interface Type {
  name: keyof typeof theme.colors.backgroundCard;
  url: string;
}

export interface PokemonTypes {
  type: Type;
}

interface Ability {
  ability: {
    name: string;
  };
}
export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonTypes[];

}

export interface PokemonDetails extends Omit<Pokemon, 'url'> {
  abilities: Ability[];
}

