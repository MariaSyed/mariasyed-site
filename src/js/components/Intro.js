import React, { Component } from 'react'
import posed from 'react-pose'

import AppSection from './AppSection'
import StartButton from './StartButton'

import { Footer, Heading, Image, Button } from 'grommet'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedin'
import EmailIcon from 'grommet/components/icons/base/SocialMail'

// import image from '../../../public/img/maria.png'

const config = {
  moveUp: {
    top: 5
  },
  moveDown: {
    top: 15
  }
}

const AnimatedBox = posed.div(config)

export default class Intro extends Component {
  render() {
    return (
      <AppSection colorIndex="light-1">
        <div className="main-content">
          <div className="cards-container">
            <AnimatedBox className="card">
              <p className="card-title">Adventurer</p>
            </AnimatedBox>
            <AnimatedBox className="card">
              <p className="card-title">Developer</p>
            </AnimatedBox>
            <AnimatedBox className="card">
              <p className="card-title">Explorer</p>
            </AnimatedBox>
          </div>

          {/*<Heading align={'center'}>{"Let's Connect"}</Heading>*/}

          {/*<div className="social-container">*/}
          {/*<Button*/}
          {/*className="social-icon first"*/}
          {/*icon={<GithubIcon size="small" />}*/}
          {/*href="https://github.com/MariaSyed"*/}
          {/*primary={true}*/}
          {/*/>*/}
          {/*<Button*/}
          {/*className="social-icon"*/}
          {/*icon={<LinkedInIcon size="small" />}*/}
          {/*href="https://www.linkedin.com/in/maria-syed-ms/"*/}
          {/*primary={true}*/}
          {/*/>*/}
          {/*<Button*/}
          {/*className="social-icon"*/}
          {/*icon={<EmailIcon size="small" />}*/}
          {/*href="mailto:me@mariasyed.com?subject=Hi, let's connect"*/}
          {/*primary={true}*/}
          {/*/>*/}
          {/*</div>*/}
        </div>
        <Footer className="footer" justify="center" align="center">
          <StartButton text="scroll down to view" />
        </Footer>
      </AppSection>
    )
  }
}
