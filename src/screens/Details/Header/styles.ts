import { type Type } from '@types/pokemon';
import styled from 'styled-components/native';

interface TextProps {
  color: Type['name'];
}

export const Container = styled.SafeAreaView``;

export const Title = styled.Texts`
  font-size: 32px;
  color: ${({ theme, color }) => theme.colors.background};
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  position: absolute;
  top: -100px;
  right: 50px;
`;

export const Number = styled.Text`
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
