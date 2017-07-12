import React, { Component } from 'react'
import { Card, Grid, Image, Header, Icon, Divider, Container, Segment } from 'semantic-ui-react'

export default class Home extends Component {

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();

    }

    handleSubmit = e => {
        e.preventDefault()

        // const { store } = this.context;
        // const dispatch = store.dispatch()

        // store.dispatch(readCurrentUser());
        // console.log(store.getState())
    }

    render() {
        // const { store } = this.context;
        // const state = store.getState();
        // <button onClick={this.handleSubmit}>test</button>


        return (
            <Container >
                <br />


                <div style={{ 'backgroundImage': 'url(https://static.pexels.com/photos/139306/pexels-photo-139306.jpeg)', 'height': '100%', 'width': '100%', 'backgroundSize': 'cover', 'borderRadius': ' 25px' }}>

                    <Grid stackable columns={1}>
                        <Grid.Row centered columns={1} >
                            <div style={{ 'backgroundImage': 'url(https://static.pexels.com/photos/38136/pexels-photo-38136.jpeg)', 'height': '60vh', 'width': '95%', 'backgroundSize': 'cover', 'margin': '0 auto', 'borderRadius': ' 25px' }}>
                                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                                <Header as='h2' inverted >
                                    A data-driven approach at expressing your story!
                                </Header>

                            </div>
                            <Divider />
                        </Grid.Row>
                        <Grid.Row columns={3} >
                            <Grid.Column width={10}>
                                <Segment style={{ 'marginLeft': '50px' }}>

                                    <Header as='h3'>
                                        Write books and stories saved to the cloud for free! A minimalist & distraction free approach. 
                                        <br /><br />
                                        A collection of tools for character development, illustration, and general writing. 

                                    </Header>
                                </Segment>

                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Image src={'http://2.bp.blogspot.com/-gW8ox_ZkqIA/Th2vq4e9QvI/AAAAAAAAAEI/ykZcYtZ6sMQ/s1600/write+your+story.jpg'} size='medium' centered />
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row columns={3}>
                            <Grid.Column width={6}>
                                <Image src={'https://res.cloudinary.com/crunchbase-production/image/upload/v1441915553/m5xbsgp3zxjvkztcxo4o.png'} size='medium' />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment style={{ 'marginRight': '50px' }}>

                                    <Header as='h3' >
                                        Keep your characters on track with their established character-design and finely craft your story by utilizing IBM Watson's Tone Analysis API.
                                <br />
                                        <br />

                                        On command analysis of your current page can reveal the Emotion present [Anger, Disgust, Fear, Joy, Sadness], Language Style [Analytical, Confident, Tentative], or Social Tendencies [Openness, Conscientousness, Extraversion, Agreeableness, Emotional Range].
                                <br />
                                        <br />
                                        Target pages, specific sentences on the page, or a specific character's dialogue to keep track of story and character development.
                                </Header>
                                </Segment >

                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </div>
            </Container>

        )
    }
}
Home.contextTypes = {
    store: React.PropTypes.object
};