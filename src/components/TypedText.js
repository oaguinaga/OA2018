import React, { Component } from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'

const AnimatedText = styled.h2`
  span:last-child {
    color: #7bed9f !important;
  }
`

class TypedText extends Component {
  componentDidMount() {
    const { strings } = this.props

    const options = {
      strings: strings,
      typeSpeed: 60,
      fadeOut: true,
      fadeOutDelay: 100,
      loop: true,
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }
  // componentWillUnmount() {
  //   this.typed.destroy()
  // }

  render() {
    return (
      <AnimatedText>
        <span
          ref={el => {
            this.el = el
          }}
        />
      </AnimatedText>
    )
  }
}

export default TypedText
