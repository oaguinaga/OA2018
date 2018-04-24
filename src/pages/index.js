import React from 'react'
import Link from 'gatsby-link'
import Landing from '../components/Landing'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const IndexPage = ({ data }) => (
  <div>
    <Landing />
    <Skills />
    <Projects data={data} />
  </div>
)

export default IndexPage

export const query = graphql`
  query WorkImages {
    chatty: imageSharp(id: { regex: "/chatty-mock.png/" }) {
      sizes(maxWidth: 560) {
        ...GatsbyImageSharpSizes
      }
    }
    wikibits: imageSharp(id: { regex: "/wikibits-mock.png/" }) {
      sizes(maxWidth: 560) {
        ...GatsbyImageSharpSizes
      }
    }
    findfit: imageSharp(id: { regex: "/findfit-mock.png/" }) {
      sizes(maxWidth: 560) {
        ...GatsbyImageSharpSizes
      }
    }
    koddy: imageSharp(id: { regex: "/koddy-mock.png/" }) {
      sizes(maxWidth: 560) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
