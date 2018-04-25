import React from 'react'
import styled, { ThemeProvider, css } from 'styled-components'
import theme from 'styled-theming'

import { media } from '../utils/style-utils'

const tagStyles = theme('mode', {
  primary: css`
    border-color: #7bed9f;
    color: #ffffff;
  `,
  secondary: css`
    border-color: #6066d5;
    color: #656565;
  `,
})

const TagContainer = styled.span`
  border: 1px solid;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background: transparent;
  margin: 1rem 0.5rem 0 0;
  border-radius: 10px;
  width: auto;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }

  ${tagStyles};
`
const Tag = ({ mode, text }) => {
  return (
    <ThemeProvider theme={{ mode }}>
      <TagContainer>{text}</TagContainer>
    </ThemeProvider>
  )
}

export default Tag
