import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'

import Home from './Home'
import UserPage from './UserPage'
import Login from './Login'
import SignUp from './Signup'

let App = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/UserPage" component={() => <UserPage />} />
      <Route exact path="/Login" component={() => <Login />} />
      <Route exact path="/SignUp" component={() => <SignUp />} />
    </div>
  </Router>
)

App = connect()(App)
export default App
