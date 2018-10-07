import React, { Component } from 'react'
import AppSection from './AppSection'
import StartButton from './StartButton'
import { Link } from 'react-scroll'
import LinkedinIcon from 'grommet/components/icons/base/SocialLinkedin'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'

import { Footer } from 'grommet'
import IntroCard from './IntroCard'

export default class Intro extends Component {
  render() {
    return (
      <AppSection id="intro-section" colorIndex="light-1" full>
        <div className="main-content">
          <h1 className="title">This is Maria.</h1>

          <div className="cards-container">
            <IntroCard
              title="Frontend Developer"
              image={require('../../images/developer_icon.png')}
              description={'JavaScript Frameworks Master'}
              fadeInTimeout={800}
              imageStyle={{ width: '80%' }}
            />
            <IntroCard
              title="Mobile Developer"
              image={require('../../images/mobile_icon.png')}
              description={'Cross platform to native iOS and Android'}
              fadeInTimeout={1300}
              imageStyle={{ width: '65%' }}
            />
            <IntroCard
              title="Music Enthusiast"
              image={require('../../images/musician_icon.png')}
              description={'Passion for dabbling with musical instruments'}
              fadeInTimeout={1800}
            />
          </div>
        </div>
        <Footer className="footer" justify="center" align="center">
          {/* <StartButton text="scroll down to view" /> */}
          <div className={'social-container'}>
            <a
              href={'https://www.linkedin.com/in/maria-syed-ms/'}
              target={'_blank'}
            >
              <LinkedinIcon className={'social-icon'} />
            </a>
            <a href={'https://github.com/mariasyed'} target={'_blank'}>
              <GithubIcon className={'social-icon'} />
            </a>
          </div>
        </Footer>
      </AppSection>
    )
  }
}
