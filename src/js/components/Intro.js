import React, { Component } from 'react'

import AppSection from './AppSection'
import StartButton from './StartButton'

import { Footer } from 'grommet'
import IntroCard from './IntroCard'

export default class Intro extends Component {
  render() {
    return (
      <AppSection colorIndex="light-1">
        <div className="main-content">
          <h1 className="title">This is Maria.</h1>
          <div className="cards-container">
            <IntroCard title="Adventurer" description={'Awesome adventurer, so cool'} fadeInTimeout={800} />
            <IntroCard title="Developer" description={'Awesome developer, so cool'} fadeInTimeout={1300} />
            <IntroCard title="Belcher" description={'Awesome belcher, so cool'} fadeInTimeout={1800} />
          </div>
        </div>
        <Footer className="footer" justify="center" align="center">
          <StartButton text="scroll down to view" />
        </Footer>
      </AppSection>
    )
  }
}
