import React from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"

const fontSizes = {
  small: 14,
  medium: 16,
  large: 18
}

const paragraphSize = ({ size }) => ({ fontSize: fontSizes[size] })
const paragraphAlign = ({ align }) => ({ textAlign: align })
const StyledText = styled.Text(
  paragraphSize,
  paragraphAlign,
  ({ bold }) => {
    return {
      fontWeight: bold ? 'bold' : 'normal'
    }
  }
)

const Paragraph = ({ bold, align, size, children }) => {


  return (
    <StyledText size={size} bold={bold} align={align}>
      {children}
    </StyledText>
  )
}

Paragraph.propTypes = {
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
}

export default Paragraph