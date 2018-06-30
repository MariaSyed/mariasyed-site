import React, { Component } from 'react'
import { pageLoaded } from './utils'
import AppSection from '../components/AppSection'
import Heading from 'grommet/components/Heading'

export default class Blog extends Component {
  componentDidMount() {
    pageLoaded('Blog')
  }

  render() {
    return (
      <AppSection>
        <Heading>Coming soon...</Heading>
      </AppSection>
    )
  }
}
