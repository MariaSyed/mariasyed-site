import React, { Component } from 'react'
import { Anchor, Box, Menu, Header, Heading, Title } from 'grommet'

const NavItem = ({ label, ...props }) => (
  <Anchor
    a11yTitle={label}
    className="nav-item"
    {...props}
  >
    {label}
  </Anchor>
)

export default class AppHeader extends Component {
  render() {
    return (
      <Header className="app-header" fixed>
        <Title className="app-title">Maria Syed</Title>
        <Menu className="nav-menu" direction="row" responsive inline size='large'>
          <NavItem label="Home" path="/" />
          <NavItem label="Blog" path="/blog" />
        </Menu>
      </Header>
    )
  }
}
