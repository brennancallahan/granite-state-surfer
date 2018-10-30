import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import BreaksShowContainer from '../containers/BreaksShowContainer'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
    <Route path='/breaks/:id' component={BreaksShowContainer} />
    </Router>
  )
}

export default App
