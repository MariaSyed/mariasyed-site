import React, { Component } from 'react'
import PropTypes from 'prop-types'
import posed from "react-pose";
import classnames from "classnames";

const AnimatedCard = posed.div({})

class IntroCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      flipped: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), this.props.timeout)
  }

  render() {
    const classes = classnames('card', {
      visible: this.state.visible,
      flipped: this.state.flipped
    })

    return (
      <AnimatedCard className={classes} onClick={() => this.setState({ flipped: !this.state.flipped })}>
        <p className="card-title">{this.props.title}</p>
      </AnimatedCard>
    )
  }
}

IntroCard.propTypes = {
  timeout: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}


export default IntroCard
