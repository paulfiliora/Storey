import React, { Component } from 'react'
import { Button, Dropdown, Menu, Modal } from 'semantic-ui-react'
import LoginForm from './Login.js'

export default class NavBar extends Component {

  state = { activeItem: 'ScriptUp' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <Menu stackable borderless={true} color={'teal'} inverted size='tiny'>
        <Menu.Item name='ScriptUp' onClick={this.handleItemClick}>
          ScriptUp
        </ Menu.Item>
        <Menu.Menu position='right'>
          <Dropdown item text='Source'>
            <Dropdown.Menu>
              <Dropdown.Item>Github</Dropdown.Item>
              <Dropdown.Item>Portfolio</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Modal trigger={<Button primary>My Account</Button>} closeIcon='close'>
                  <LoginForm {...this.props} />
            </Modal>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}