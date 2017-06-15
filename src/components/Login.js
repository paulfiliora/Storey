import React, { Component } from 'react'
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react'
import { loginUser } from '../actions'


export default class LoginForm extends Component {

  state = { email: '', password: '', submittedEmail: '', submittedPassword: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

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

    const { password, email } = this.state

    return (
      <div>

        <Grid centered verticalAlign="middle">
          <Grid.Column textAlign="center">
            <br />
            <Header as='h2' color='teal'>
              <Image src='https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2FScriptUpLogo.png?alt=media&token=a3ab1422-2cfb-4c39-b01f-c7c4e85ca886' />
              Log-in to your account
            </Header>
            <Form onSubmit={this.handleLoginSubmit} size="large">
              <Segment >
                <Form.Field>
                  <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={email} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <Input fluid icon='lock' iconPosition='left' placeholder='Password' type="password" value={password} onChange={this.handleChange} />
                </Form.Field>
                <Button fluid color="teal" size="large">LOGIN</Button>
              </Segment>
              <Message>
                New to ScriptUp? <a href="#">Sign Up Here</a>
              </Message>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}