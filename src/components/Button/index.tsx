import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type Props = {
    title: string
} & TouchableOpacityProps

export default function Button({title, ...rest}: Props) {
    return (
        <S.Container {...rest}>
            <S.Title>{title}</S.Title>
        </S.Container>
    )

}