import React from 'react'
import styled from 'styled-components'
import Button from './Button'

import topographic from '../img/topographic.png'

const ContactWrapper = styled.div`
  width: 100vw;

  background-image: url(${topographic}),
    linear-gradient(141deg, #7bed9f 0%, #84fdaa 100%);
  background-size: 180px, auto;
  clip-path: polygon(0 0, 100% 4%, 100% 100%, 0% 100%);
  margin-top: -40px;
`

const ContactContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 60px 1rem;
  text-align: center;

  h3 {
    color: #5258c9;
    font-size: 3.5rem;
  }

  p {
    color: #868be9;
    font-size: 1.8rem;
    margin-bottom: 5rem;
  }
`

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContainer>
        <h3>Contact</h3>
        <p>
          I'm currently accepting new projects and would love to hear about
          yours. Please take a few minutes to tell me about it.
        </p>
        <Button
          mode="tertiary"
          text="get started"
          action="mailto:og.aguinaga@gmail.com"
        />
      </ContactContainer>
    </ContactWrapper>
  )
}

export default Contact
