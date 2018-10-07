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
    const { flipping, reversed, visible } = this.state

    const cardClasses = classnames('card', {
      visible,
      flip: flipping !== reversed
    })

    const cardTextClasses = classnames('card-text', {
      flipping,
      reversed
    })

    const cardImageClasses = classnames('card-image', {
      flipping,
      reversed
    })

    return (
      <div
        className={cardClasses}
        onClick={() =>
          this.setState({ flipping: true }, () => {
            setTimeout(
              () =>
                this.setState({
                  reversed: !reversed,
                  flipping: false
                }),
              800 // 0.8s transition as defined in _section-intro.scss > .card
            )
          })
        }
      >
        <div style={{ width: '100%' }}>
          <img
            src={this.props.image}
            alt={this.props.title}
            className={cardImageClasses}
            style={this.props.imageStyle}
          />
        </div>
        <div className={cardTextClasses}>
          {reversed ? this.props.description : this.props.title}
        </div>
      </div>
    )
  }
}

IntroCard.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fadeInTimeout: PropTypes.number,
  imageStyle: PropTypes.any
}

IntroCard.defaultProps = {
  fadeInTimeout: 800,
  imageStyle: {}
}

export default IntroCard
