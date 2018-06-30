import React, { Component, PropTypes } from 'react'

import Accomplishments from '../components/Accomplishments'
import Intro from '../components/Intro'
import Section3 from '../components/Section3'
import { pageLoaded } from './utils'

export default class Home extends Component {
  componentDidMount() {
    pageLoaded('Home')
  }

  render() {
    return (
      <div>
        <Intro />

        <Accomplishments />

        {/*<Section3 />*/}
      </div>
    )
  }
}