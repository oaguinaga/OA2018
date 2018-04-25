import React, { Component } from 'react'
import styled from 'styled-components'

import Work from './Work'

const projects = [
  {
    name: 'chatty',
    tasks: 'Web App Development, UX/UI',
    desc:
      'Wedler Engineering is a results-oriented, value driven company that cultivates leadership and empowers people to do better and be better in their workplace and local community.',
    tech: ['Agular', 'HTML', 'CSS', 'Javascript', 'SVG', 'Gulp', 'Illustrator'],
  },
  {
    name: 'wikibits',
    tasks: 'Web App Development, UX/UI',
    desc:
      'Wedler Engineering is a results-oriented, value driven company that cultivates leadership and empowers people to do better and be better in their workplace and local community.',
    tech: ['Agular', 'HTML', 'CSS', 'Javascript', 'SVG', 'Gulp', 'Illustrator'],
  },
  {
    name: 'koddy',
    tasks: 'Web App Development, UX/UI',
    desc:
      'Wedler Engineering is a results-oriented, value driven company that cultivates leadership and empowers people to do better and be better in their workplace and local community.',
    tech: ['Agular', 'HTML', 'CSS', 'Javascript', 'SVG', 'Gulp', 'Illustrator'],
  },
  {
    name: 'findfit',
    tasks: 'Web App Development, UX/UI',
    desc:
      'Wedler Engineering is a results-oriented, value driven company that cultivates leadership and empowers people to do better and be better in their workplace and local community.',
    tech: ['Agular', 'HTML', 'CSS', 'Javascript', 'SVG', 'Gulp', 'Illustrator'],
  },
]

class Projects extends Component {
  render() {
    const { data } = this.props

    return (
      <div>
        {projects.map((project, i) => (
          <Work
            projectId = {i}
            key={project.name}
            workData={project}
            data={data}
            mode={i % 2 ? 'secondary' : 'primary'}
          />
        ))}
      </div>
    )
  }
}

export default Projects
