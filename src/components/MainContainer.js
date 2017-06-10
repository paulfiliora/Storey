import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Icon, Header } from 'semantic-ui-react'
import { readAllUsers } from '../actions'
import { createNewUser } from '../actions'


export default class MainContainer extends Component {
    state = { visible: true }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state
        return (
            <div style={{ height: 600 }}>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
                        <Menu.Item name='home'>
                            <Icon name='home' />
                            PSets
            </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Icon name='gamepad' />
                            Class
            </Menu.Item>
                        <Menu.Item name='camera'>
                            <Icon name='camera' />
                            Channels
            </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                            <Button onClick={e => {
                                e.preventDefault()
                                this.props.dispatch(createNewUser())
                            }}>Test fbDB</Button>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}