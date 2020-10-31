import React from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { darkCedarChest, gunmetal, white } from '../../styles/colors'

const fontSizes = {
  small: 14,
  medium: 16,
  large: 18
}
const lineHeights = {
  small: '20px',
  medium: '22px',
  large: '24px'
}

const letterSpacings = {
  small: -0.3,
  medium: -0.5,
  large: -0.7
}

const fontColors = {
  'default': gunmetal,
  'darkOrange': darkCedarChest,
  'white': white
}

const paragraphSize = ({ size }) => ({ fontSize: fontSizes[size], letterSpacing: letterSpacings[size], lineHeight: lineHeights[size] })
const paragraphAlign = ({ align }) => ({ textAlign: align })
const StyledText = styled.Text(
  paragraphSize,
  paragraphAlign,
  ({ colour }) => {
    return {
      color: fontColors[colour]
    }
  },
  ({ bold }) => {
    return {
      fontWeight: bold ? 'bold' : 'normal'
    }
  }
)

const Paragraph = ({ children, ...props }) => {

  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  )
}

Paragraph.propTypes = {
  colour: PropTypes.oneOf(['default', 'darkOrange', 'white']),
  /**
   * Embolden paragraph text without conveying any special importance or relevance.
   */
  bold: PropTypes.bool,
  /**
   * The font size.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Content alignment.
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * The content. Can be text, other components.
   */
  children: PropTypes.node.isRequired,
}

Paragraph.defaultProps = {
  bold: false,
  size: 'medium',
  align: 'left',
  colour: 'default'
}

export default Paragraph