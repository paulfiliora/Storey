import React, { Component } from 'react'
import { Button, Dropdown, Menu, Modal, Form } from 'semantic-ui-react'
import { createNewUser } from '../actions'
// import Login from './Login.js'

export default class NavBar extends Component {

  state = { activeItem: 'home', email: '', password: '', username: '', submittedEmail: '', submittedPassword: '', submittedUsername: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = e => {
    e.preventDefault()
    const { email, password, username } = this.state

    this.setState({ submittedEmail: email, submittedPassword: password, submittedUsername: username })

    this.props.dispatch(createNewUser(
      email,
      password,
      username
    ));
  }

  render() {
    // const {dispatch} = this.props

    const { activeItem, email, password, username } = this.state

    return (
      <Menu borderless={true} color={'teal'} inverted size='tiny'>
        <Menu.Item name='ScriptUp' active={activeItem === 'ScriptUp'} onClick={this.handleItemClick} fitted='vertically'>
          Script^Up
        </ Menu.Item>
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
                  <div>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <Form.Input placeholder='Email' name='email' value={email} onChange={this.handleChange} />
                        <Form.Input placeholder='Password' name='password' value={password} onChange={this.handleChange} />
                        <Form.Input placeholder='Username' name='username' value={username} onChange={this.handleChange} />
                        <Form.Button content='Submit' />
                      </Form.Group>
                    </Form>
                  </div>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}