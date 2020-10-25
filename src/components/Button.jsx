import React from 'react'
import { useWindowDimensions, Pressable, StyleSheet, Text } from 'react-native'
import { gunmetal, white, cedarChest } from '../styles/colors'


const Button = ({ children, variant, onPress, mode }) => {
    const windowWidth = useWindowDimensions().width
    const findWidth = () => {
        return windowWidth <= 768 ? { width: '100%' } : { width: 180 }
    }
    let textColor

    const getVariant = (variant, mode) => {
        if (variant === 'outline') {
            textColor = mode === 'dark' ? gunmetal : cedarChest
            return {
                backgroundColor: white,
                borderColor: textColor,
                borderWidth: 1,
            }
        } else {
            textColor = white
            return {
                backgroundColor: mode === 'dark' ? gunmetal : cedarChest
            }
        }
    }
    return (
        <Pressable
            onPress={onPress}
            style={[styles.wrapperCustom, findWidth(), getVariant(variant, mode)]}>
            <Text style={[styles.text, { color: textColor }]}>{children}</Text>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    wrapperCustom: {
        borderRadius: 4,
        padding: 6,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        //cursor: 'pointer',
    },
    text: {
        fontSize: 16,
    },

});

export default Button

