import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a' href='/Login'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' href='/Signup' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default class Home extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();

    }

    render() {
        const { visible } = this.state

        return (
            <div>
                {visible ? <FixedMenu /> : null}

                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomVisible={this.hideFixedMenu}
                    once={false}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item as='a' active>Home</Menu.Item>
                                <Menu.Item as='a'>Work</Menu.Item>
                                <Menu.Item as='a'>Company</Menu.Item>
                                <Menu.Item as='a'>Careers</Menu.Item>
                                <Menu.Item position='right' >
                                    <Button as='a' href='/Login' inverted>Log in</Button>
                                    <Button as='a' href='/Signup' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                </Menu.Item>
                            </Menu>
                        </Container>

                        <Container text>
                            <Header
                                as='h1'
                                content='Storey'
                                inverted
                                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                            />
                            <Header
                                as='h2'
                                content='Be creative, tell a story.'
                                inverted
                                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                            />
                            <Button primary size='huge'>
                                Get Started
                <Icon name='right arrow' />
                            </Button>
                        </Container>
                    </Segment>
                </Visibility>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>Clean and Clear</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                Write books and stories saved to the cloud for free! A minimalist and distraction free approach.
                </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>A Writer&#8217;s Toolset</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                A collection of tools for character development, illustration, and general writing.
                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image
                                    bordered
                                    size='large'
                                    src='https://static.pexels.com/photos/38136/pexels-photo-38136.jpeg'
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Button size='huge'>Check Them Out</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    <Image avatar src='/assets/images/avatar/large/nan.jpg' />
                                    <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Container text>
                        <Header as='h3' style={{ fontSize: '2em' }}>Watson Tone Analysis</Header>
                        <p style={{ fontSize: '1.33em' }}>
                        Keep your characters on track with their established character-design and finely craft your story by utilizing IBM Watson&#8217;s Tone Analysis API.
                        <b/>
                        On command analysis of your current page can reveal the Emotion present [Anger, Disgust, Fear, Joy, Sadness], Language Style [Analytical, Confident, Tentative], or Social Tendencies [Openness, Conscientousness, Extraversion, Agreeableness, Emotional Range].
                        <b/>
                        Target pages, specific sentences on the page, or a specific character&#8217;s dialogue to keep track of story and character development.
            </p>
                        <Button as='a' size='large'>Read More</Button>

                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                        >
                            <a href='#'>Case Studies</a>
                        </Divider>

                        <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it&#8217;s really
              true.
              It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
            </p>
                        <Button as='a' size='large'>I&#8217;m Still Quite Interested</Button>
                    </Container>
                </Segment>

                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Paul Filiora</List.Item>
                                        <List.Item as='a'>Github Repo</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Tools' />
                                    <List link inverted>
                                        <List.Item as='a'>Firebase</List.Item>
                                        <List.Item as='a'>Watson API</List.Item>
                                        <List.Item as='a'>React-Redux</List.Item>
                                        <List.Item as='a'>Semantic UI</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>Footer Header</Header>
                                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        )
    }
}
Home.contextTypes = {
    store: React.PropTypes.object
};
