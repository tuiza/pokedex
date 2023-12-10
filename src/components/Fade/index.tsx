import React, { useEffect } from 'react'
import { type ViewProps, useWindowDimensions } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import * as S from './styles'

type FadeAnimationProps = {
    children: React.ReactNode
} & ViewProps

export function FadeAnimation({ children, ...rest }: FadeAnimationProps) {
    const { width: displayWidth } = useWindowDimensions()

    const cardOpacity = useSharedValue(0)
    const cardOffSet = useSharedValue(0.25 * displayWidth) // começar fora da tela

    const animatedStyle = useAnimatedStyle(() => {
        'worklet' // palavra rezervada do js pra otimizar 
        return {
            opacity: cardOpacity.value,
            transform: [
                {
                    translateX: cardOffSet.value
                }
            ]
        }
    })

    useEffect(() => {
        cardOpacity.value = withTiming(1, { duration: 1000 }) // vai de 0% a 100% de opacidade em 1 seg
        cardOffSet.value = withTiming(0, { duration: 1000 }) // vai pro ponto 0 no eixo x da tela em 1 seg
    }, [])

    return (
        <S.ContainerAnimation {...rest} style={animatedStyle}>
            {children}
        </S.ContainerAnimation>
    )
}
