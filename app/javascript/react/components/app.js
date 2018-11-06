import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import BreaksShowContainer from '../containers/BreaksShowContainer'
import UserContainer from '../containers/UserContainer'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
    <Route path='/breaks/:id' component={BreaksShowContainer} />
    <Route path='/users/:id' component={UserContainer} />
    </Router>
  )
}

export default App
