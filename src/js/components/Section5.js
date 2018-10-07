import React, { Component } from 'react'
import AppSection from './AppSection'
import { Heading } from 'grommet'

export class Section5 extends Component {
  render() {
    return (
      <AppSection
        id="section-5"
        id="#section5"
        colorIndex="neutral-2-a"
        full="vertical"
      >
        <Heading>Belcher things here</Heading>
      </AppSection>
    )
  }
}
