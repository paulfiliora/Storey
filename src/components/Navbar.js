import React, { Component } from 'react'
import { Button, Dropdown, Menu, Header, Image, Modal } from 'semantic-ui-react'
import Login from './Login.js'

export default class NavBar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='tiny'>
        <Menu.Item name='ScriptUp' active={activeItem === 'ScriptUp'} onClick={this.handleItemClick} />
        <Menu.Item name='PSets' active={activeItem === 'PSets'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Dropdown item text='Create'>
            <Dropdown.Menu>
              <Dropdown.Item>New Post</Dropdown.Item>
              <Dropdown.Item>Temp</Dropdown.Item>
              <Dropdown.Item>Temp2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Modal trigger={<Button primary>Log in / Sign up</Button>}>
              <Modal.Header>Login/Register</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <Login />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}