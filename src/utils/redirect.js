import React from 'react'
import { Redirect as R, withRouter } /**/from 'react-router'

export const GoBack = withRouter(({location}) => (
  <R to={location.state.pathname}/>
))

export const Redirect = withRouter(({location, to}) => (
  <R to={{pathname: to, state: location}}/>
))