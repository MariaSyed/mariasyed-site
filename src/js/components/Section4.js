import React, { Component } from 'react'
import AppSection from './AppSection'
import { Heading } from 'grommet'

export class Section4 extends Component {
  render() {
    return (
      <AppSection
        id="section-4"
        id="#section4"
        colorIndex="grey-2-a"
        full="vertical"
      >
        <Heading>Adventure things here</Heading>
      </AppSection>
    )
  }
}
