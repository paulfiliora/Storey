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