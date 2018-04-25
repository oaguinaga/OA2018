import React, { Component } from 'react'
import styled from 'styled-components'

import TypedText from './TypedText'
import Button from './Button'

import bgPattern from '../img/background-pattern.png'
import personalLogo from '../img/personal-logo.svg'

import { media } from '../utils/style-utils'

const LandingWrapper = styled.div`
  width: 100vw;
  min-height: 70vh;

  background-image: url(${bgPattern}),
    linear-gradient(141deg, #4e54c8 0%, #8f94fb 100%);
  background-size: 70px, auto;
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 100px), 0 100%);
  overflow: hidden;
  margin-bottom: -110px;
`

const LandingContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 70px 1rem;

  h1 {
    color: white;
    font-size: 6rem;
    margin: 0;
    ${media.handheld`
      font-size: 3.5rem;
    `};
  }

  .typed-container {
    ${media.handheld`
      height: 8rem;
    `};
  }

  h2 {
    font-size: 4rem;
    color: #ffffff;
    ${media.handheld`
      font-size: 2.5rem;
    `};
  }
`

const PersonalLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.handheld`
    justify-content: center;
    margin-bottom: 3rem;
  `};
`
const ButtonWrapper = styled.div`
  display: flex;
  ${media.handheld`
    flex-direction: column;
    align-items: center;
  `};
`
class Landing extends Component {
  render() {
    return (
      <LandingWrapper>
        <LandingContainer>
          <PersonalLogo>
            <img src={personalLogo} alt="Omar Aguinaga Logo" />
          </PersonalLogo>
          <h1>
            Hola, I'm <strong>Omar!</strong>
          </h1>
          <h2>I design & build</h2>
          <div className="typed-container">
            <TypedText
              strings={[
                'amazing experiences for the web.',
                'user interfaces.',
                'landing pages.',
                'corporate websites.',
                'web applications.',
              ]}
            />
          </div>
          <ButtonWrapper>
            <Button
              mode="primary"
              text="let's talk"
              action="mailto:og.aguinaga@gmail.com"
            />
            <Button
              mode="secondary"
              text="my resume"
              action="https://www.linkedin.com/in/oaguinaga/"
              target="_blank"
            />
          </ButtonWrapper>
        </LandingContainer>
      </LandingWrapper>
    )
  }
}

export default Landing
