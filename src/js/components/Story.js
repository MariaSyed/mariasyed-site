import React, { Component } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import AppSection from './AppSection'
import Carousel from 'grommet/components/Carousel'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

const config = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1000
    },
    width: 20
  },
  hidden: { opacity: 0, width: 100 }
}

const AnimatedBox = posed.div(config)

const CarouselTrack = ({ children, ...props }) => (
  <Box className="content" {...props}>
    {children}
  </Box>
)

export default class Story extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true
    }
  }

  render() {
    return (
      <AppSection colorIndex="brand">
        <AnimatedBox
          style={{ backgroundColor: 'orange', width: 100, height: 100 }}
          pose={this.state.isVisible ? 'visible' : 'hidden'}
          onClick={() => this.setState({ isVisible: !this.state.isVisible })}
        />
      </AppSection>
    )
  }
}

CarouselTrack.propTypes = {
  children: PropTypes.element.isRequired
}
