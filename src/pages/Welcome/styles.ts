import styled, {css} from "styled-components/native";

export const Container = styled.SafeAreaView`
    ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    `
    }
`

export const Content = styled.View`
    height: 70%;
    justify-content: center;
    align-items: center;

`

export const Footer = styled.View`
    ${({theme}) => css`
    height: 30%;
    background-color: ${theme.types.water};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    justify-content: center;
    align-items: center;
    `
    }
`
export const Title = styled.Text`
${({theme}) => css`
    color: ${theme.colors.text_white};
    font-size: 20px;
    font-weight: bold;
    `
    }

`
export const SubTitle = styled.Text`
${({theme}) => css`
    color: ${theme.colors.text_white};
    font-size: 16px;
    margin-top: 20px;
    `
    }

`
