import React, { Component } from 'react'
import AppSection from './AppSection'
import Carousel from 'grommet/components/Carousel'
import Box from 'grommet/components/Box'

export default class Accomplishments extends Component {
  render() {
    return (
      <AppSection colorIndex="brand">
        <Carousel className="story-carousel" autoplay={false} >
          <Box pad='large' colorIndex='neutral-3'>
            <Box pad='medium' colorIndex='neutral-2'>
              Content inside of a Box element.
            </Box>
          </Box>
          <Box pad='large' colorIndex='neutral-3'>
            <Box pad='medium' colorIndex='neutral-2'>
              Some more content
            </Box>
          </Box>
        </Carousel>
      </AppSection>
    )
  }
}
