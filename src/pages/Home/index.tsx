import React from 'react';
import * as S from './styles'

export default function Welcome() {
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
     </S.Container>        
  )
}