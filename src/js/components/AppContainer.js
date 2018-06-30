import React, { Component } from 'react'
import PropTypes from 'prop-types'

import App from 'grommet/components/App'
import Notification from 'grommet/components/Notification'
import AppHeader from './AppHeader'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: undefined
    }
    this.onCloseNotification.bind(this)
  }

  onCloseNotification() {
    this.setState({ error: undefined })
  }

  render() {
    let errorNode
    if (this.state.error) {
      errorNode = (
        <Notification
          closer
          onClose={this.onCloseNotification}
          status="critical"
          message="An unexpected error happened, please try again later"
        />
      )
    }

    return (
      <App centered={false}>
        <AppHeader />
        {errorNode}
        {this.props.children}
      </App>
    )
  }
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ])
}

Main.defaultProps = {
  children: null
}
