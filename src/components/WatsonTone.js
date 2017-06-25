import React, { Component } from 'react'
import { Segment, Progress, Header } from 'semantic-ui-react'

export default class WatsonTone extends Component {
    componentDidMount() {

    }

    render() {
        const { store } = this.context;
        // console.log(store.getState())
        const angerVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["0"].tones["0"].score / 1.5) * 1000
        const disgustVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["0"].tones["1"].score / 1.5) * 1000
        const fearVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["0"].tones["2"].score / 1.5) * 1000
        const joyVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["0"].tones["3"].score / 1.5) * 1000
        const sadnessVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["0"].tones["4"].score / 1.5) * 1000
        // console.log(angerVal)
        return (
            <Segment basic>
                <Header>Tone Analyzer</Header>
                <Progress percent={angerVal} active size='tiny' color='pink'>
                    Anger
                </Progress>
                <Progress percent={disgustVal} active size='tiny' color='violet'>
                    Disgust
                </Progress>
                <Progress percent={fearVal} active size='tiny' color='olive'>
                    Fear
                </Progress>
                <Progress percent={joyVal} active size='tiny' color='yellow'>
                    Joy
                </Progress>
                <Progress percent={sadnessVal} active size='tiny' color='blue'>
                    Sadness
                </Progress>
            </Segment>
        )
    }
}

WatsonTone.contextTypes = {
    store: React.PropTypes.object
};