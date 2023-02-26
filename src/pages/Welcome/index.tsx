import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemon from './pokemon.json'
import * as S from './styles'
import Button from '../../components/Button';
import {  useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const { navigate } = useNavigation()
  return (
      <S.Container>
          <S.Content>
              <S.WrapperAnimation>
                  <S.WrapperImage>
              <AnimatedLottieView
                  style={{ width: 200 }}
                  source={pokemon}
                  autoPlay
                  loop />
                      
                </S.WrapperImage>
                  </S.WrapperAnimation>
              <S.Title>
                    Bem-vindo a sua Pokédex
              </S.Title>
              <S.SubTitle>
                    Encontre os seus Pokémons favoritos
              </S.SubTitle>
         </S.Content>
          <S.Footer>
              <Button title="Iniciar" onPress={()=> navigate('Home')} />
              </S.Footer>
     </S.Container>        
  )
}