import React, { Component } from 'react'
import { Button, Dropdown, Menu, Modal } from 'semantic-ui-react'
import LoginForm from './Login.js'

export default class NavBar extends Component {

  render() {

    return (
      <Menu attached stackable inverted borderless={true} size='tiny'>
        <Menu.Menu>
          <Dropdown item text='ScriptUp'>
            <Dropdown.Menu>
              <Dropdown.Item href='https://github.com/pfiliora/ScriptUp' target='_blank'>Github</Dropdown.Item>
              <Dropdown.Item href='https://pfiliora.github.io/Filiora_Website/' target='_blank'>Portfolio</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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