import React, { Component } from 'react'
import { Grid, Image, Header, Icon, Divider } from 'semantic-ui-react'
// import {app} from '../tools/express'
// import { itemsHasErrored } from '../actions'

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

        return (
            <Grid stackable centered columns={1}>

                <Grid.Row centered columns={1} >
                    <Grid.Column>
                        <br />
                        <Header as='h2' color='blue'>
                            <Icon name='code' />
                            Learn to code as a team!
                        </Header>
                        <Image src={'https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2Fworktogether.jpg?alt=media&token=01c20cbc-1313-41aa-b207-72e1000f91ea'} centered size='medium' shape='circular' />
                        <Divider />
                        <button onClick={this.handleSubmit}>test</button>

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={3} >
                    <Grid.Column>
                        <Header as='h4' color='blue'>
                            Find and work on problem sets to improve your skills!</Header>
                        <Image src={'https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2Fjavascript-sample.jpg?alt=media&token=330ff5cd-0d66-43c7-8361-62404aca1bd8'} size='medium' shape='circular' centered />
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' color='blue'>
                            Import & Export with Github!</Header>
                        <Image src={'https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2Finspectocat.jpg?alt=media&token=8513ad0b-97ba-471d-af0e-c05d152cead7'} size='medium' shape='circular' centered />
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' color='blue'>
                            Communicate with peers to solve problems!</Header>
                        <Image src={'https://firebasestorage.googleapis.com/v0/b/scriptup-5c4f7.appspot.com/o/images%2Fbackgrounds%2Fteam-bump.jpg?alt=media&token=c4a4a6d3-eb44-4925-a02d-3cb090992e2c'} size='medium' shape='circular' centered />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
Home.contextTypes = {
    store: React.PropTypes.object
};