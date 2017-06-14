import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import Navbar from './Navbar'
import MainContainer from './MainContainer'

import LandingPage from './Home'

let App = (props) => (
  <div>
    <Container fluid color={'teal'}>
      <Navbar {...props} />
      <LandingPage {...props}/>
    </Container>
  </div>
)

App = connect()(App)
export default App

    // <LandingPage/>
      // <Navbar {...props} />
      // <MainContainer  {...props} />