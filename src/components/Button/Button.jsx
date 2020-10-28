import React, { useState, useRef } from 'react'
import { useWindowDimensions, Pressable, StyleSheet, Text, Platform } from 'react-native'
import PropTypes from 'prop-types'
import {
  gunmetal,
  white,
  cedarChest,
  lightCedarChest,
  lightGunmetal,
  darkCedarChest
} from '../../styles/colors'
import { useHover, useFocus, useActive } from 'react-native-web-hooks'

const Button = ({ children, variant, onPress, colour }) => {

  const ref = useRef(null);
  const [isPressed, setIsPressed] = useState(false)
  const windowWidth = useWindowDimensions().width
  const isFocused = useFocus(ref)
  const isHover = useHover(ref)
  const isActive = useActive(ref)


  const pressBackground = colour === 'dark' ? lightGunmetal : lightCedarChest
  const modeColor = colour === 'dark' ? gunmetal : cedarChest

  const findWidth = () => {
    return windowWidth <= 768 ? { width: '100%' } : { width: 180 }
  }

  const getTextStyles = (variant, colour) => {
    const textColor = colour === 'dark' ? gunmetal : cedarChest
    const pressColor = colour === 'dark' ? gunmetal : darkCedarChest
    if (Platform.OS === 'web') {
      return {
        color: variant === 'outline' ?
          (isPressed ? pressColor : textColor) :
          (isPressed || isHover ? textColor : white)
      }
    } else {
      return {
        color: variant === 'outline' ?
          (isPressed ? pressColor : textColor) :
          white
      }
    }

  }

  const getWebStyles = (variant) => {
    if (Platform.OS !== 'web') return
    if (variant === 'outline') {
      return {
        cursor: 'pointer',
        boxShadow: isFocused && `0 0 0 0, 0 0 0 0.125rem ${white} inset, 0 0 0 0.1875rem ${modeColor} inset`,
        transition: 'all 0.2s ease-in-out',
        borderWidth: isHover || isFocused ? '0.125rem' : 1
      }
    } else {
      return {
        cursor: 'pointer',
        backgroundColor: isHover || isPressed ? (isActive ? pressBackground : white) : modeColor,
        borderColor: modeColor,
        borderWidth: isHover || isFocused ? '0.125rem' : 1,
        color: isHover || isPressed ? modeColor : white
      }
    }
  }

  const getVariant = (variant, colour) => {
    if (variant === 'outline') {
      return {
        backgroundColor: isPressed ? pressBackground : white,
        borderColor: modeColor,
        borderWidth: isPressed ? 1.5 : 1,
      }
    } else {
      return {
        backgroundColor: colour === 'dark' ? gunmetal : cedarChest,
        opacity: isPressed && Platform.OS !== 'web' ? 0.85 : 1
      }
    }

  }

  return (
    <Pressable
      onPress={onPress}
      onPressOut={() => setIsPressed(false)}
      onPressIn={() => setIsPressed(true)}
      ref={ref}
      accessibilityRole="button"
      style={[styles.wrapperCustom, findWidth(), getVariant(variant, colour), getWebStyles(variant)]}>
      <Text style={[styles.text, getTextStyles(variant, colour)]}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 6,
    padding: 6,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})

Button.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['outline', 'filled']),
  /**
   * The colour.
   */
  colour: PropTypes.oneOf(['dark', 'orange']),
  /**
   * The label.
   */
  children: PropTypes.string.isRequired,
}
Button.defaultProps = {
  variant: 'filled',
  colour: 'orange'
}

export default Button

