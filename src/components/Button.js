import React from 'react'
import styled, { ThemeProvider, css } from 'styled-components'
import theme from 'styled-theming'

import { media } from '../utils/style-utils'

const buttonStyles = theme('mode', {
  primary: css`
    border-color: #7bed9f;
    color: #ffffff;
    :hover {
      background: #ffffff;
      color: #5258c9;
      border-color: #ffffff;
    }
  `,
  secondary: css`
    border-color: #ffffff;
    color: #7bed9f;
    :hover {
      background: #7bed9f;
      color: #ffffff;
      border-color: #7bed9f;
    }
  `,
  tertiary: css`
    border-color: #5258c9;
    color: #5258c9;
    :hover {
      background: #5258c9;
      color: #ffffff;
    }
  `,
})

const Btn = styled.a`
  text-decoration: none;
  border: 3px solid;
  font-size: 2rem;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s;
  background: transparent;
  margin: 3rem 2rem 1rem 0;
  ${media.handheld`
    margin: 3rem 0 0 0;
  `};

  ${buttonStyles};
`
const Button = ({ mode, text, action, target }) => {
  return (
    <ThemeProvider theme={{ mode }}>
      <Btn
        href={action}
        target={target ? target : ''}
        rel="noopener noreferrer"
      >
        {text}
      </Btn>
    </ThemeProvider>
  )
}

export default Button
