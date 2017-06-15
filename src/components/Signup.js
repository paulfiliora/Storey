import React, { Component } from 'react'
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react'
import { createNewUser } from '../actions'


export default class SignUp extends Component {

    state = { email: '', password: '', username: '', submittedEmail: '', submittedPassword: '', submittedUsername: '' }

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

        const { username, password, email } = this.state

        return (
            <div>

                <Grid columns={1} divided>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment >

                                <Form onSubmit={this.handleSubmit} className='attached fluid segment'>
                                    <Form.Input label='Username' placeholder='Username' name='username' type='text' value={username} onChange={this.handleChange} />
                                    <Form.Input label='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange} />
                                    <Form.Input label='Password' placeholder='Password' name='password' value={password} onChange={this.handleChange} />
                                    <Form.Checkbox inline label='I agree to the terms and conditions' />
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