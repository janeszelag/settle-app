import React from "react"
import { View, StyleSheet, Platform, useWindowDimensions } from 'react-native'
import PropTypes from "prop-types"
import {
  white,
  lightCedarChest,
  lightGunmetal,
  grey
} from '../../styles/colors'



const getShadowStyles = (variant) => {
  if (variant !== 'default') return
  if (Platform.OS === 'web') {
    return { boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.1)' }
  } else if (Platform.OS === 'iOS') {
    return {
      shadowOpacity: 0.75,
      shadowRadius: 10,
      shadowColor: grey,
      shadowOffset: { height: 0, width: 0 },
    }
  }
  return { elevation: 3 }
}

const Card = ({ variant, children, fullHeight }) => {
  const windowWidth = useWindowDimensions().width

  const styles = StyleSheet.create({
    cardBase: {
      width: '100%',
      paddingVertical: windowWidth >= 764 ? 32 : 24,
      paddingHorizontal: windowWidth >= 764 ? 24 : 18,
      backgroundColor: variant === 'default' ? white : variant === 'blue' ? lightGunmetal : lightCedarChest,
      borderRadius: 6,
      height: fullHeight ? '100%' : undefined
    }
  })



  return (
    <View style={[styles.cardBase, getShadowStyles(variant)]}>
      {children}
    </View>
  )
}

Card.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['default', 'blue', 'orange']),/**
  * Sets the `Card`'s `height` equal to its parent.
  */
  fullHeight: PropTypes.bool,
  /**
   * The content. Can be text, other components.
   */
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  variant: 'default',
  fullHeight: false
}

export default Card