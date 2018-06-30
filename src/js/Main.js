import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AppContainer from './components/AppContainer'
import Home from './screens/Home'
import Blog from './screens/Blog'
import NotFound from './screens/NotFound'

const AppRoute = ({ component, ...props }) => (
  <Route
    {...props}
    component={() => (
      <AppContainer>
        {component}
      </AppContainer>
    )}
  />
)

const AppRouter = () => (
  <Router>
    <Switch>
      <AppRoute exact={true} path="/" component={<Home />} />
      <AppRoute exact path="/blog" component={<Blog />} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </Router>
)

export default AppRouter
