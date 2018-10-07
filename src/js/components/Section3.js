import React, { Component } from 'react'

import AppSection from './AppSection'
import { Box, Heading, Button } from 'grommet'
import GitHubIcon from 'grommet/components/icons/base/SocialGithub'

export default class Section3 extends Component {
  render() {
    return (
      <AppSection id="section-3" colorIndex="grey-1-a" basis="large" a11yTitle="Section 2">
        <Box>
          <Heading size="small">Check out this site on GitHub</Heading>
          <Button icon={<GitHubIcon />}
                  label='Check'
                  onClick={() => {}}
                  href='#'
                  primary={true}
                  critical={false}
                  accent={false} />
        </Box>
      </AppSection>
    )
  }
}
