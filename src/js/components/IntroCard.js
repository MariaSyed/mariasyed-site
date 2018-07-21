import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class IntroCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      flipping: false,
      reversed: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), this.props.fadeInTimeout)
  }

  render() {
    const cardClasses = classnames('card', {
      visible: this.state.visible,
      flip: this.state.flipping !== this.state.reversed
    })

    const cardTextClasses = classnames('card-text', {
      flipping: this.state.flipping,
      reversed: this.state.reversed
    })

    return (
      <div
        className={cardClasses}
        onClick={() =>
          this.setState({ flipping: true }, () => {
            setTimeout(
              () =>
                this.setState({
                  reversed: !this.state.reversed,
                  flipping: false
                }),
              800 // 0.8s transition as defined in _section-intro.scss > .card
            )
          })
        }
      >
        <div className={cardTextClasses}>
          {this.state.reversed ? this.props.description : this.props.title}
        </div>
      </div>
    )
  }
}

IntroCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fadeInTimeout: PropTypes.number
}

IntroCard.defaultProps = {
  fadeInTimeout: 800
}

export default IntroCard
