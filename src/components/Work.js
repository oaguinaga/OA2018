import React from 'react'
import styled, { ThemeProvider, css } from 'styled-components'
import theme from 'styled-theming'
import Img from 'gatsby-image'

import Tag from './Tag'
import bgPattern from '../img/background-pattern.png'
import { media } from '../utils/style-utils'

const bgGradients = theme('mode', {
  primary: css`
    background-image: url(${bgPattern}),
      linear-gradient(141deg, #4e54c8 0%, #8f94fb 100%);
  `,
  secondary: css`
    background-image: url(${bgPattern});
    background-color: white;
  `,
})

const textColor = theme('mode', {
  primary: css`
    h3 {
      font-size: 3.5rem;
      color: #ffffff;
    }
    .work-task {
      color: #7bed9f;
      font-size: 1.2rem;
    }

    p {
      color: #ffffff;
      margin-top: 3rem;
    }
  `,
  secondary: css`
    .work-description {
      grid-row: 1/2;
      @media only screen and (max-width: 639px) {
        grid-row: 2/3;
      }
    }
    h3 {
      font-size: 3.5rem;
      color: #656565;
    }
    .work-task {
      color: #6770d6;
      font-size: 1.2rem;
    }

    p {
      color: #656565;
      margin-top: 3rem;
    }
  `,
})

const WorkWrapper = styled.div`
  width: 100vw;

  background-size: 70px, auto;
  ${bgGradients};

  margin-top: -40px;
`

const WorkContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 70px 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  h3 {
    text-transform: capitalize;
  }

  ${textColor};
`

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const WorkTitle = styled.div`
  padding-top: 40px;
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;

  h1 {
    color: #ffffff;
    font-size: 5rem;
  }

  h4 {
    margin-top: 1rem;
    color: #ffffff;
    font-size: 1.5rem;
    a {
      color: #7bed9f;
      text-decoration: none;
    }
  }
`

const Work = ({ workData, data, mode, projectId }) => {
  return (
    <ThemeProvider theme={{ mode }}>
      <WorkWrapper>
        {projectId === 0 && (
          <WorkTitle>
            <h1>
              My <strong>Work</strong>{' '}
            </h1>
            <h4>
              Want to know more?{' '}
              <a href="mailto:og.aguinaga@gmail.com">Email me</a>{' '}
            </h4>
          </WorkTitle>
        )}
        <WorkContainer>
          <Img
            className={`${workData.name}-img`}
            style={{
              marginLeft: '10%',
              maxWidth: '80%',
            }}
            sizes={data[workData.name].sizes}
          />
          <div className="work-description">
            <h3>{workData.name}</h3>
            <span className="work-task">{workData.tasks}</span>
            <p>{workData.desc}</p>
            <p>Technologies & Tools Used:</p>
            <TagWrapper>
              {workData.tech.map(tech => (
                <Tag mode={mode} text={tech} key={tech} />
              ))}
            </TagWrapper>
          </div>
        </WorkContainer>
      </WorkWrapper>
    </ThemeProvider>
  )
}

export default Work
