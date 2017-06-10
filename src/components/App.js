import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import MainContainer from './MainContainer'

let App = (props) => (
  <div>
    <Navbar />
    <MainContainer  {...props} />
  </div>
)

App = connect()(App)
export default App