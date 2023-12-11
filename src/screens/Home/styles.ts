import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    margin: 20px;
    flex: 1;
    `
export const TitleContainer = styled.View`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
    height: 80px;
`
export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold ;

`
export const SubTitle = styled.Text`
    flex-direction: column;
    color: gray;
`
export const Filter = styled.TextInput`
    background-color: #ddd;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    align-items: center;
    color: red;
    margin-bottom: 20px;
`