import styled, {css} from 'styled-components/native';



interface CardProps {
    type: string // tipar com enum
}

export const Card = styled.TouchableOpacity<CardProps>`
${({ theme, type }) => css`
    display: flex;
    flex-direction: row;
    height: 140px;
    width: 100%;
    margin-bottom: 10px;
    margin-top: 30px;
    justify-content: space-between;
    padding: 15px;
    background-color: ${theme.colors.boxType[type]};
    border-radius: 10px;
    `
    }
`

export const InfosWrapper = styled.View`
    flex-direction: column;
    width: 50%;
`

export const ImageWrapper = styled.View`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 50%;
    `

export const Image = styled.Image`
    height: 150px;
    width: 150px;
    margin-top: -30px;
`
export const ImageDetailsLeft = styled.Image`
    position: absolute;
    height: 32px;
    width: 74px;
    left: 90px;
    top: 10px;
`
export const ImageDetailsRight = styled.Image`
    position: absolute;
    right: -20px;
`

export const Number = styled.Text`
${({theme}) => css`
    color: ${theme.colors.light_text};
    font-size: 14px;
    font-weight: bold;
    `
    }
`

export const Name = styled.Text`
${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: 25px;
    margin-top: 5px;
    line-height: 31px;
    font-weight: 500;
    text-transform: capitalize; 
    `
    }
`

export const TypeWrapper = styled.View<CardProps>`
${({theme, type}) => css`
    width: auto;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    padding: 5px;
    background-color: ${theme.colors.boxType[type]};
    border-radius: 3px;
    
    `
    }
`

export const TypesContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-left: 5px;
    margin-top: 5px;
`

export const TypeText = styled.Text<CardProps>`
${({theme, type }) => css`
    justify-content: center;
    color: white;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 14px;
    background-color: ${theme.colors.boxType[type]};
    `
}
`
