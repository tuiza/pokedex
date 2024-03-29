import * as S from './styles';
import dots from '../../../assets/img/dots.png';
import pokeball from '../../../assets/img/pokeballCard.png';
import { type TouchableOpacityProps } from 'react-native';
import { type Pokemon } from '../../types/Pokemon';

type Props = {
  pokemon: Pokemon;
} & TouchableOpacityProps;

export default function Card({ pokemon, ...rest }: Props) {
  return (
    <S.Card type={pokemon.types[0].type.name} {...rest}>
      <S.InfosWrapper>
        <S.Number>#{pokemon.id}</S.Number>
        <S.Name>{pokemon.name}</S.Name>
        <S.TypesContainer>
          {pokemon.types.map((type, i) => (
            <S.TypeWrapper key={i} type={type.type.name}>
              <S.TypeText type={type.type.name}>{type.type.name}</S.TypeText>
            </S.TypeWrapper>
          ))}
        </S.TypesContainer>
        <S.ImageDetailsLeft source={dots} />
      </S.InfosWrapper>
      <S.ImageWrapper>
        <S.ImageDetailsRight source={pokeball} />
        <S.Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
          }}
        />
      </S.ImageWrapper>
    </S.Card>
  );
}
