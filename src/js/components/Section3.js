import React, { Component } from 'react'

import AppSection from './AppSection'
import { Box, Heading } from 'grommet'

export default class Section3 extends Component {
  render() {
    return (
      <AppSection colorIndex="brand">
        <Box>
          <Heading size="small">cool stuff here soon</Heading>
        </Box>
      </AppSection>
    )
  }
}
