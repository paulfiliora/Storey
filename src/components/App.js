import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'


import Home from './Home'
import Navbar from './Navbar'
// import Footer from './Footer'
import UserPage from './UserPage'
import SignUp from './Signup'

let App = () => (

  <Router history={browserHistory}>

    <div>
      <Navbar />

      <Route exact path="/" component={() => <Home />} />

      <Route exact path="/UserPage" component={() => <UserPage />} />

      <Route exact path="/SignUp" component={() => <SignUp />} />

    </div>

  </Router>

)

App = connect()(App)
export default App