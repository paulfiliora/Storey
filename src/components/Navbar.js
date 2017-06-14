import React, { Component } from 'react'
import { Button, Dropdown, Menu, Modal } from 'semantic-ui-react'
import LoginForm from './Login.js'

export default class NavBar extends Component {

  state = { activeItem: 'ScriptUp' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <Menu attached stackable inverted borderless={true} size='tiny'>
        <Menu.Item name='ScriptUp' onClick={this.handleItemClick}>
          ScriptUp
        </ Menu.Item>
        <Menu.Menu>
          <Dropdown item text='Source'>
            <Dropdown.Menu>
              <Dropdown.Item href='https://github.com/pfiliora/ScriptUp' target='_blank'>Github</Dropdown.Item>
              <Dropdown.Item href='https://pfiliora.github.io/Filiora_Website/' target='_blank'>Portfolio</Dropdown.Item>
              <Dropdown.Item href='https://github.com/pfiliora/ScriptUp' target='_blank'>Github</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Modal trigger={<Button >My Account</Button>} closeIcon='close'>
              <LoginForm {...this.props} />
            </Modal>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}