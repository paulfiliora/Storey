import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import LandingPage from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import MainContainer from './MainContainer'
import SignUp from './Signup'

let App = (props) => (
  <Router>

    <div>
      <Navbar {...props} />
      <Route exact path="/" component={() => <LandingPage {...props} />} />
      <Route path="/MainContainer" component={MainContainer} />
      <Route exact path="/SignUp" component={() => <SignUp {...props} />} />

      <Footer />
    </div>

  </Router>

)

App = connect()(App)
export default App

    //       <LandingPage {...props} />
      // <Navbar {...props} />
      // <MainContainer  {...props} />