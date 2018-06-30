import React, { Component } from 'react'
import Section from 'grommet/components/Section'

export default class AppSection extends Component {
  render() {
    return (
      <Section
        {...this.props}
        className={this.props.className}
        appCentered
        justify={'center'}
        align={'center'}
        full
        pad={{ vertical: 'large' }}
      >
        {this.props.children}
      </Section>
    )
  }
}
