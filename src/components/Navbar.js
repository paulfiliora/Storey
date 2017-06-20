import React, { Component } from 'react'
import { Button, Dropdown, Menu, Modal } from 'semantic-ui-react'
import LoginForm from './Login.js'
import { readCurrentUser } from '../actions'


export default class NavBar extends Component {

  componentDidMount() {
    // this.props.dispatch(readCurrentUser());
    console.log('hey')
  }


  render() {

    return (
      <Menu attached stackable inverted borderless={true} size='tiny'>
        <Menu.Menu>
          <Dropdown href='/' item text='ScriptUp' />
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Modal trigger={<Button inverted>My Account</Button>} closeIcon='close'>
              <LoginForm {...this.props} />
            </Modal>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}