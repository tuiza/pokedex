import { type Type } from '@types/pokemon';
import styled from 'styled-components/native';

interface TextProps {
  type: Type['name'];
}

export const Container = styled.SafeAreaView<TextProps>`
  background-color: ${({ theme, type }) => theme.colors.backgroundCard[type]};
  padding: 40px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.background};
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const BackButton = styled.TouchableOpacity`
  margin: 10px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  position: absolute;
  top: -100px;
  right: 50px;
`;

export const Info = styled.View`
  flex-direction: column;
`;

export const Number = styled.Text<TextProps>`
  flex-direction: column;
  color: ${({ theme }) => theme.colors.light_text};
  font-size: 16px;
  font-weight: 700;
`;

export const Pokemon = styled.View`
  position: relative;
  bottom: 25px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 30px;
  height: 100%;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const InfoText = styled.Text<{ size?: number }>`
  font-size: ${({ size }) => size ?? 18}px;
  color: ${({ theme }) => theme.colors.light_text};
  text-transform: capitalize;
`;
