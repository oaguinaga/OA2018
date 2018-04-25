import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import bgPattern from '../img/background-pattern.png'
import logoIcon from '../img/logo-icon.svg'
import twIcon from '../img/tw-icon.svg'
import inIcon from '../img/in-icon.svg'
import gitIcon from '../img/git-icon.svg'

const FooterWrapper = styled.div`
  width: 100vw;

  background-image: url(${bgPattern}),
    linear-gradient(141deg, #4e54c8 0%, #8f94fb 100%);
  background-size: 70px, auto;
`

const FooterContainer = styled.div`
  max-width: 250px;
  margin: 0 auto;
  padding: 40px 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #9cf8b9;
    font-size: 1.5rem;
  }
`

const SocialContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  a {
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.3);
    }
  }
`

const social = [
  {
    name: 'twiiter',
    link: 'https://twitter.com/soyoag',
    icon: { twIcon },
    iconFileName: 'twIcon',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/oaguinaga/',
    icon: { inIcon },
    iconFileName: 'inIcon',
  },
  {
    name: 'github',
    link: 'https://github.com/omaraguinaga',
    icon: { gitIcon },
    iconFileName: 'gitIcon',
  },
]

console.log(social[0].icon['twIcon'])
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <img src={logoIcon} alt="Omar Aguinaga Logo" />
        <p>Handmade by me © 2018.</p>
        <SocialContainer>
          {social.map(link => (
            <a
              href={link.link}
              key={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.icon[`${link.iconFileName}`]} alt="social icon" />
            </a>
          ))}
        </SocialContainer>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
