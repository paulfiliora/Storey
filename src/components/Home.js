import React, { Component } from 'react'
import { Grid, Image, Menu, Header, Icon, Segment, Divider } from 'semantic-ui-react'


export default class LandingPage extends Component {
    state = { activeItem: 'closest' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Grid stackable centered columns={1}>

                <Grid.Row centered columns={1} >
                    <Grid.Column>
                        <br />
                        <Header as='h2' color='blue'>
                            <Icon name='code' />
                            Learn to code as a team!
                        </Header>
                        <Image src='https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2Fworktogether.jpg?alt=media&token=01c20cbc-1313-41aa-b207-72e1000f91ea' centered size='medium' shape='circular' />
                        <Divider />

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={3} >
                    <Grid.Column>
                        <Header as='h4' color='blue'>
                            Find and work on problem sets to improve your skills!</Header>
                        <Image src={'https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2Fjavascript-sample.jpg?alt=media&token=f5f4fe13-1549-4951-b2b0-93c452c9ce2c'} size='medium' shape='circular' centered />
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' color='blue'>
                            Import & Export with Github!</Header>
                        <Image src={'https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2Finspectocat.jpg?alt=media&token=8513ad0b-97ba-471d-af0e-c05d152cead7'} size='medium' shape='circular' centered />
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' color='blue'>
                            Communicate with peers to solve problems!</Header>
                        <Image src={'https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2Fteam-bump.jpg?alt=media&token=c1443c97-edce-44e5-8d7c-8b72245335b8'} size='medium' shape='circular' centered />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={4}>
                    <Grid.Column>
                        <Image src='/assets/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/assets/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/assets/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/assets/images/wireframe/image.png' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}