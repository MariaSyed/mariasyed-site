import React, { Component } from 'react'
import AppSection from './AppSection'
import { Heading } from 'grommet'

export class DeveloperSection extends Component {
  render() {
    return (
      <AppSection id="developer-section" colorIndex="light-2" full="vertical">
        <Heading>Developer things here</Heading>
      </AppSection>
    )
  }
}
