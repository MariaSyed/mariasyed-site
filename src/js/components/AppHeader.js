import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Responsive from 'grommet/utils/Responsive'
import { Anchor, Menu, Header, Title } from 'grommet'
import MenuIcon from 'grommet/components/icons/base/Menu'

const NavItem = ({ label, mobile, ...props }) => (
  <Anchor a11yTitle={label} className={mobile ? 'nav-item-mobile' : 'nav-item'} {...props}>
    {label}
  </Anchor>
)

export default class AppHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: false
    }
    this._onResponsive = this._onResponsive.bind(this)
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive)
  }

  componentWillUnmount() {
    this._responsive.stop()
  }

  _onResponsive(mobile) {
    this.setState({ mobile })
  }

  render() {
    return (
      <Header className="app-header" fixed>
        <Title className="app-title">Maria Syed</Title>
        <Menu
          className={this.state.mobile ? 'nav-menu-mobile' : 'nav-menu'}
          direction="row"
          responsive
          inline={!this.state.mobile}
          size="large"
          icon={<MenuIcon />}
        >
          <NavItem label="Home" path="/" mobile={this.state.mobile} />
          <NavItem label="Blog" path="/blog" mobile={this.state.mobile} />
        </Menu>
      </Header>
    )
  }
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  mobile: PropTypes.bool
}

NavItem.defaultProps = {
  mobile: false
}
