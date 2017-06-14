import React from 'react'
import { connect } from 'react-redux'

import LandingPage from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
// import MainContainer from './MainContainer'

let App = (props) => (
  <div>
      <Navbar {...props} />
      <LandingPage {...props}/>
      <Footer {...props}/>
  </div>
)

App = connect()(App)
export default App

    // <LandingPage/>
      // <Navbar {...props} />
      // <MainContainer  {...props} />