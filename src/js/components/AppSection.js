import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Section from 'grommet/components/Section'

export default class AppSection extends Component {
  // componentWillMount() {
  //   configureAnchors({})
  // }

  render() {
    return (
      <Section
        {...this.props}
        appCentered
        justify={'start'}
        align={'stretch'}
        pad={{ vertical: 'large' }}
        responsive
      >
        {this.props.children}
      </Section>
    )
  }
}

AppSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

AppSection.defaultProps = {
  full: false,
  children: null
}
