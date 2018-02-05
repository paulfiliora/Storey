import React, { Component } from 'react'
import { Button, Form, Icon, Message, Container, Modal, Menu } from 'semantic-ui-react'
import LoginForm from './Login.js'
import { createNewUser } from '../actions'

export default class SignUp extends Component {

    state = { username: '', email: '', password: '', submittedUsername: '', submittedEmail: '', submittedPassword: '' }
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate()
        );
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = e => {
        e.preventDefault()

        const { store } = this.context;

        const { username, email, password } = this.state

        this.setState({ submittedUsername: username, submittedEmail: email, submittedPassword: password })

        console.log(this.state)

        store.dispatch(createNewUser(
            username,
            email,
            password
        ));
    }

    render() {

        const { username, email, password } = this.state

        return (
            <div>
            <Menu size='massive' color='teal'>
              <Menu.Item>
                <img alt='logo' src='https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2FScriptUpLogo.png?alt=media&token=a3ab1422-2cfb-4c39-b01f-c7c4e85ca886' />
              </Menu.Item>

                 <Menu.Item name='home' href='/'/>
               </Menu>
                <Container>
                    <br />
                    <Message
                        attached
                        header='Welcome to our ScriptUp!'
                        content='Fill out the form below to sign-up for a new account'
                    />
                    <Form onSubmit={this.handleSubmit} className='attached fluid segment'>
                        <Form.Input label='Username' placeholder='Username' name='username' type='text' value={username} onChange={this.handleChange} />
                        <Form.Input label='Email' placeholder='Email' type='text' name='email' value={email} onChange={this.handleChange} />
                        <Form.Input label='Password' type='password' placeholder='Password' name='password' value={password} onChange={this.handleChange} />
                        <Form.Checkbox inline label='I agree to the terms and conditions' />
                        <Button color='blue'>Submit</Button>
                    </Form>
                    <Message attached='bottom' warning>
                        <Icon name='help' />Already signed up? <a href='/Login'>Login here</a> instead.
                </Message>
                </Container>
                <br /><br /> <br /><br /><br /><br />

            </div>
        )
    }
}

SignUp.contextTypes = {
    store: React.PropTypes.object
};
