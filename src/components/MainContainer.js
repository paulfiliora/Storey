import React, { Component } from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import CodeEditor from '../containers/codeEditor'
import { readAllUsers } from '../actions'



export default class MainContainer extends Component {

    render() {
        return (
            <Grid color={'teal'} columns={3}>
                <Grid.Row>
                    <Grid.Column >
<Button onClick={e => {
                                    e.preventDefault()
                                    this.props.dispatch(readAllUsers())
                                }}>Test fbDB</Button>                    </Grid.Column>
                    <Grid.Column>
                        <CodeEditor />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/assets/images/wireframe/paragraph.png' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
/*
// import { readAllUsers } from '../actions'

 state = { visible: true }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    /*<Button onClick={e => {
                                    e.preventDefault()
                                    this.props.dispatch(readAllUsers())
                                }}>Test fbDB</Button>


import { Sidebar, Segment, Button, Menu, Icon, Header, Grid, Image } from 'semantic-ui-react'
        const { visible } = this.state

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
                            <Header as='h3'>ScriptSpace</Header>
                            <Button onClick={this.toggleVisibility}></Button>
                                <CodeEditor />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>

import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleRows = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleRows*/