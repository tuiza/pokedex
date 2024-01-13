import { type Type } from '@types/pokemon';
import styled from 'styled-components/native';

interface TextProps {
  color: Type['name'];
}

export const Container = styled.SafeAreaView``;

export const Title = styled.Text<TextProps>`
  font-size: 18px;
  color: ${({ theme, color }) => theme.colors.boxType[color]};
  font-weight: 700;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 400;
`;

export const Header = styled.View<TextProps>`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme, color }) => theme.colors.backgroundCard[color]};
  height: 250px;
`;

export const Content = styled.View`
  position: relative;
  bottom: 25px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 30px;
  height: 100%;
`;

export const Info = styled.View`
  padding: 20px;
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

export const AbilitesContainer = styled.View`
  flex-direction: column;
`;
