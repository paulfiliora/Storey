import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Sidebar, Segment, Button, Menu, Image, Header } from 'semantic-ui-react'
// import CodeEditor from '../containers/codeEditor'
// import { readCurrentUser } from '../actions'
import BooksPanel from './UserPageBooksPanel'
import ChapterTabs from './UserPageChapterTabs'
import WhatsonTone from './WatsonTone'
import './App.css';

export default class UserPage extends Component {
    state = { visible: true }

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {

        const { visible } = this.state

        return (
            <div>
                <Sidebar.Pushable as={Segment} >
                    <Sidebar as={Menu} animation='scale down' visible={visible} icon='labeled' vertical >
                        <BooksPanel />
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Button basic onClick={this.toggleVisibility}>Menu</Button>

                        <Segment>
                            <ChapterTabs />
                        </Segment>
                    </Sidebar.Pusher>

                    <Sidebar as={Menu} animation='overlay' direction='right' visible={visible} icon='labeled' vertical >
                        <WhatsonTone />
                    </Sidebar>

                </Sidebar.Pushable>
            </div>
        )
    }
}
UserPage.contextTypes = {
    store: React.PropTypes.object
};