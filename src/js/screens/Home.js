import React, { Component } from 'react'

import Intro from '../components/Intro'
import { pageLoaded } from './utils'

export default class Home extends Component {
  componentDidMount() {
    pageLoaded('Home')
  }

  render() {
    return (
      <div>
        <Intro />
      </div>
    )
  }
}
