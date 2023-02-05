import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemon from './pokemon.json'
import * as S from './styles'

export default function Welcome() {
  return (
      <S.Container>
          <S.Content>
              <AnimatedLottieView
                  style={{ width: 200 }}
                  source={pokemon}
                  autoPlay
                  loop />
         </S.Content>
              <S.Footer>
              <S.Title>
                    Bem-vindo a sua Pokédex
              </S.Title>
              <S.SubTitle>
                    Encontre o seu pokémon favorito
              </S.SubTitle>
              </S.Footer>
     </S.Container>        
  )
}