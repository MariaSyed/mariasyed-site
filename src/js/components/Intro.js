import React, { Component } from 'react'

import AppSection from './AppSection'
import StartButton from './StartButton'

import { Footer } from 'grommet'
import IntroCard from "./IntroCard";

export default class Intro extends Component {
  render() {
    return (
      <AppSection colorIndex="light-1">
        <div className="main-content">
          <h1 className="title">This is Maria.</h1>
          <div className="cards-container">
            <IntroCard
              title='Adventurer'
              timeout={800}
            />
            <IntroCard
              title='Developer'
              timeout={1300}
            />
            <IntroCard
              title='Belcher'
              timeout={1800}
            />
          </div>
        </div>
        <Footer className="footer" justify="center" align="center">
          <StartButton text="scroll down to view" />
        </Footer>
      </AppSection>
    )
  }
}
