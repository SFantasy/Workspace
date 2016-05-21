import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import './style.scss'

import App from './containers/App'
import Settings from './containers/Settings'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/settings' component={Settings} />
  </Router>,
  document.getElementById('app')
)
