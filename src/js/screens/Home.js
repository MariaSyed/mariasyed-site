import React, { Component } from 'react'

import Intro from '../components/Intro'
import Section3 from '../components/Section3'
import { pageLoaded } from './utils'
import { DeveloperSection } from "../components/DeveloperSection";
import { Section4 } from "../components/Section4";
import { Section5 } from "../components/Section5";

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
