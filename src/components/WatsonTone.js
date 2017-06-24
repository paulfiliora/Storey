import React, { Component } from 'react'
import { Segment, Progress, Header } from 'semantic-ui-react'

export default class WhatsonTone extends Component {
    
    render() {

        return (
            <Segment basic>
                <Header>Tone Analyzer</Header>
                <Progress percent={11} active size='tiny' color='pink'>
                    Anger
                            </Progress>
                <Progress percent={20} active size='tiny' color='violet'>
                    Disgust
                            </Progress>
                <Progress percent={55} active size='tiny' color='olive'>
                    Fear
                            </Progress>
                <Progress percent={65} active size='tiny' color='yellow'>
                    Joy
                            </Progress>
                <Progress percent={30} active size='tiny' color='blue'>
                    Sadness
                            </Progress>
            </Segment>
        )
    }
}

WhatsonTone.contextTypes = {
    store: React.PropTypes.object
};