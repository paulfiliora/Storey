import React, { Component } from 'react'
import { Button, Form, Divider, Grid, Segment } from 'semantic-ui-react'
import { createNewUser, loginUser } from '../actions'


export default class LoginForm extends Component {

  state = { email: '', password: '', username: '', submittedEmail: '', submittedPassword: '', submittedUsername: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleRegisterSubmit = e => {
    e.preventDefault()
    const { email, password, username } = this.state

    this.setState({ submittedEmail: email, submittedPassword: password, submittedUsername: username })

    this.props.dispatch(createNewUser(
      email,
      password,
      username
    ));
  }

    handleLoginSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state

    this.setState({ submittedEmail: email, submittedPassword: password })

    this.props.dispatch(loginUser(
      email,
      password
    ));
  }

  render() {

    const { username, password, email } = this.state

    return (
      <div>

<Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column>
            <Segment >

              <Form onSubmit={this.handleRegisterSubmit} className='attached fluid segment'>
                <Form.Input label='Username' placeholder='Username' name='username' type='text' value={username} onChange={this.handleChange} />
                <Form.Input label='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange} />
                <Form.Input label='Password' placeholder='Password' name='password' value={password} onChange={this.handleChange} />
                <Form.Checkbox inline label='I agree to the terms and conditions' />
                <Button color='blue'>Submit</Button>
              </Form>
            </Segment>

      </Grid.Column>
      <Grid.Column>

            <Segment >

              <Form onSubmit={this.handleLoginSubmit} className='attached fluid segment'>
                <Form.Input label='Email' placeholder='Email' name='email' type='text' value={email} onChange={this.handleChange} />
                <Form.Input label='Password' placeholder='Password' name='password' value={password} onChange={this.handleChange} />
                <Button color='blue'>Submit</Button>
              </Form>
            </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>

      </div>
    )
  }
}