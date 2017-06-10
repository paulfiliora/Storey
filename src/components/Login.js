import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { readAllUsers } from '../actions'


export default class Login extends Component {
    state = { name: '', email: '', submittedName: '', submittedEmail: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = e => {
        e.preventDefault()
        const { name, email } = this.state

        this.setState({ submittedName: name, submittedEmail: email })

        this.props.dispatch('CREATE_USER', {
			name,
			email,
		});
    }

    render() {
        const { name, email } = this.state
     // const { name, email, submittedName, submittedEmail } = this.state

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
                        <Form.Input placeholder='Email' name='email' value={email} onChange={this.handleChange} />
                        <Form.Button content='Submit' />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}