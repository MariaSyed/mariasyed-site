import React, { Component } from 'react'

import AppSection from './AppSection'
import StartButton from './StartButton'

import { Footer, Heading, Image, Button } from 'grommet'
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedin'
import EmailIcon from 'grommet/components/icons/base/SocialMail'

import image from '../../../public/img/maria.png'

export default class Intro extends Component {
  render() {
    return (
      <AppSection colorIndex="light-1">
        <div className="main-content">
          <div className="img-container">
            <Image src={image} className="main-image" />
          </div>

          <Heading align={'center'}>{"Let's Connect"}</Heading>

          <div className="social-container">
            <Button
              className="social-icon first"
              icon={<LinkedInIcon size="small" />}
              href="https://www.linkedin.com/in/maria-syed-ms/"
              primary={true}
            />
            <Button
              className="social-icon"
              icon={<EmailIcon size="small" />}
              href="mailto:me@mariasyed.com?subject=Hi, let's connect"
              primary={true}
            />
          </div>
        </div>
        <Footer justify="center" align="center">
          <StartButton text="scroll down to view" />
        </Footer>
      </AppSection>
    )
  }
}
