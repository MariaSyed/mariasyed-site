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
  visible: { opacity: 1, transition: { duration: 1100 } },
  hidden: { opacity: 0, transition: { duration: 1100 } }
}

const AnimatedBox = posed.div(config)

export default class Intro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card1Visible: false,
      card2Visible: false,
      card3Visible: false
    }
  }

  componentWillMount() {
    setTimeout(() => this.setState({ card1Visible: true }), 800)
    setTimeout(() => this.setState({ card2Visible: true }), 1200)
    setTimeout(() => this.setState({ card3Visible: true }), 1800)

  }

  render() {
    return (
      <AppSection colorIndex="light-1">
        <div className="main-content">
          <h1 className="title">This is Maria.</h1>
          <div className="cards-container">
            <AnimatedBox className="card" pose={this.state.card1Visible ? 'visible' : 'hidden'}>
              <p className="card-title">Adventurer</p>
            </AnimatedBox>
            <AnimatedBox className="card" pose={this.state.card2Visible ? 'visible' : 'hidden'}>
              <p className="card-title">Developer</p>
            </AnimatedBox>
            <AnimatedBox className="card" pose={this.state.card3Visible ? 'visible' : 'hidden'}>
              <p className="card-title">Belcher</p>
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
