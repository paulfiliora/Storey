import React, { Component } from 'react'
import { Segment, Progress, Header, Divider } from 'semantic-ui-react'

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
        const analyticalVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["1"].tones["0"].score / 1.5) * 1000
        const confidentVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["1"].tones["1"].score / 1.5) * 1000
        const tentativeVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["1"].tones["2"].score / 1.5) * 1000
        const opennessVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["2"].tones["0"].score / 1.5) * 1000
        const conscientiousnessVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["2"].tones["1"].score / 1.5) * 1000
        const extraversionVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["2"].tones["2"].score / 1.5) * 1000
        const agreeablenessVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["2"].tones["3"].score / 1.5) * 1000
        const emotionalRangeVal = (store.getState().watson.analysisData[1].document_tone.tone_categories["2"].tones["4"].score / 1.5) * 1000

        console.log(analyticalVal)
        return (
            <Segment basic>
                
                <Header as='h4'>Document Level</Header>

                <Divider hidden />
                <Header as='h5'>Emotion</Header>
                <Divider />
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

                <Divider hidden />
                <Header as='h5'>Language Style</Header>
                <Divider />
                <Progress percent={analyticalVal} active size='tiny' color='pink'>
                    Analytical
                </Progress>
                <Progress percent={confidentVal} active size='tiny' color='violet'>
                    Confident
                </Progress>
                <Progress percent={tentativeVal} active size='tiny' color='olive'>
                    Tentative
                </Progress>

                <Divider hidden />
                <Header as='h5'>Social Tendencies</Header>
                <Divider />
                <Progress percent={opennessVal} active size='tiny' color='pink'>
                    Openness
                </Progress>
                <Progress percent={conscientiousnessVal} active size='tiny' color='violet'>
                    Conscientiousness
                </Progress>
                <Progress percent={extraversionVal} active size='tiny' color='olive'>
                    Extraversion
                </Progress>
                <Progress percent={agreeablenessVal} active size='tiny' color='yellow'>
                    Agreeableness
                </Progress>
                <Progress percent={emotionalRangeVal} active size='tiny' color='blue'>
                    Emotional Range
                </Progress>
            </Segment>

        )
    }
}

WatsonTone.contextTypes = {
    store: React.PropTypes.object
};