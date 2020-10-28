import React from "react"
import styled from "styled-components/native"
import PropTypes from "prop-types"
import { gunmetal } from "../../styles/colors"
import { useWindowDimensions, Platform } from 'react-native'


const Heading = ({ children, level }) => {
  const windowWidth = useWindowDimensions().width
  const getFontSize = ({ level }) => {
    let fontSize
    switch (level) {

      case "h1":
        fontSize = (Platform.OS === 'web' && windowWidth <= 764) ? 28 : 44
        break
      case "h2":
        fontSize = (Platform.OS === 'web' && windowWidth <= 764) ? 24 : 28
        break
      case "h3":
        fontSize = 20
        break
      case "h4":
        fontSize = 16
        break
    }
    return {
      fontSize
    }
  }

  const StyledText = styled.Text(
    getFontSize,
    {
      fontWeight: "bold",
      color: gunmetal,
    })

  return <StyledText level={level}>{children}</StyledText>
}


Heading.propTypes = {
  /**
   * The visual level of the heading.
   */
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  /**
   * The content. Can be text, other components.
   */
  children: PropTypes.string.isRequired,
}


export default Heading
