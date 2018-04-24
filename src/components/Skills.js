import React, { Component } from 'react'
import styled from 'styled-components'

import strategyIcon from '../img/strategy-icon.svg'
import codeIcon from '../img/code-icon.svg'
import designIcon from '../img/design-icon.svg'
import supportIcon from '../img/support-icon.svg'
import bgPattern from '../img/background-pattern.png'

import { media } from '../utils/style-utils'

const skills = [
  {
    name: 'Strategy',
    desc:
      'Collaborate with clients and peers to nurture and transform ideas into well thought out design specs.',
    icon: strategyIcon,
  },
  {
    name: 'Code',
    desc:
      'I design in the browser with HTML(5), CSS(3) and a touch of JavaScript. I love coding things from scratch.',
    icon: codeIcon,
  },
  {
    name: 'Design',
    desc:
      'I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions',
    icon: designIcon,
  },
  {
    name: 'Support',
    desc:
      'Launching your site will be just the first step in what should ideally be an ongoing process',
    icon: supportIcon,
  },
]

const SkillsWrapper = styled.div`
  width: 100vw;
  padding-top: 80px;
  background-image: url(${bgPattern});
  background-size: 70px, auto;
`
const SkillContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 70px 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 20px;
`

const SkillCard = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: stretch;
  align-content: start;

  img {
    margin-bottom: 20px;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    text-align: center;
    align-self: center;
  }
  ${media.tablet`
    :last-child {
      grid-column: 2/ 2;
    }
  `};
`

const Skill = ({ skills }) => {
  return (
    <SkillContainer>
      {skills.map(skill => (
        <SkillCard key={skill.name}>
          <img src={skill.icon} alt={`${skill.name} icon`} />
          <h3>{skill.name}</h3>
          <p>{skill.desc}</p>
        </SkillCard>
      ))}
    </SkillContainer>
  )
}

class Skills extends Component {
  render() {
    return (
      <SkillsWrapper>
        <Skill skills={skills} />
      </SkillsWrapper>
    )
  }
}

export default Skills
