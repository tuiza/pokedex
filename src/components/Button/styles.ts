import styled, {css} from "styled-components/native";

export const Container = styled.TouchableOpacity`
${({theme}) => css`
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.boxType.water};
    border-radius: 10px;
    `
    }
`
export const Title = styled.Text`
${({theme}) => css`
    font-size: 14px;
    color: ${theme.colors.light_text};
    `
    }
`