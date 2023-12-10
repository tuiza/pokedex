import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
    ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    `
    }
`

export const Content = styled.View`
${({ theme }) => css`
    height: 70%;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.backgroundCard.water};
`}
`

export const WrapperAnimation = styled.View`
    ${({theme}) => css`
    height: 300px;
    width: 200px;
    justify-content: center;
    align-items: center;
    transform: rotate(30deg);
    border-radius: 100px;
    background-color: ${theme.colors.backgroundCard.water};
    `
    }
`

export const WrapperImage = styled.View`
    transform: rotate(-30deg);
`

export const Footer = styled.View`
    ${({theme}) => css`
    height: 30%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
    padding: 20px;
    `
    }
`
export const Title = styled.Text`
${({theme}) => css`
    color: ${theme.colors.light_text};
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    `
    }

`
export const SubTitle = styled.Text`
${({theme}) => css`
    color: ${theme.colors.light_text};
    font-size: 16px;
    margin-top: 20px;
    `
    }

`
