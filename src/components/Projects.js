import React, { Component } from 'react'
import styled from 'styled-components'

import Work from './Work'

const projects = [
  {
    name: 'chatty',
    tasks: 'Web App Development, UX/UI Design Design',
    desc:
      'Chatty is a web application where people can connect by joining to different groups and chat about common interests. I designed both the front-end and back-end of this application.',
    tech: [
      'Agular',
      'HTML',
      'CSS',
      'Javascript (ES6)',
      'SVG',
      'Gulp',
      'Illustrator',
      'Mongo DB',
    ],
  },
  {
    name: 'wikibits',
    tasks: 'Web App Development, UX/UI Design',
    desc:
      'Wikibits creates a place on the internet where people can share their programming knowledge and crowdsource tips and tricks. I developed both the front-end as well as the back-end of this application.',
    tech: [
      'Ruby on Rails',
      'TDD',
      'Mongo DB',
      'HTML',
      'CSS',
      'Javascript (ES6)',
      'SVG',
      'Illustrator',
    ],
  },
  {
    name: 'koddy',
    tasks: 'Web App Development, UX/UI Design',
    desc:
      'Koddy is a learning platform that aims to teach both fundamental and new features of basic web technologies such as CSS, HTML, and Javascript. I developed both front-end and back-end of this application and I am currently working on creating new content.',
    tech: [
      'React',
      'Webpack',
      'HTML',
      'CSS',
      'Javascript (ES6)',
      'ES6',
      'Figma',
      'Illustrator',
    ],
  },
  {
    name: 'findfit',
    tasks: 'Web App Development, UX/UI Design',
    desc:
      'Findfit helps people to find the best fitness center according to their training necesities and location. I developed oth front-end and back-end of this application',
    tech: [
      'Node',
      'Mongo DB',
      'Express',
      'Pug',
      'Webpack',
      'Javascript (ES6)',
      'SASS',
      'Passport JS',
      'Google Maps',
      'Figma',
    ],
  },
]

class Projects extends Component {
  render() {
    const { data } = this.props

    return (
      <div>
        {projects.map((project, i) => (
          <Work
            projectId={i}
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
