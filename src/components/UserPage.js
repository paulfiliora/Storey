import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react'
import BooksPanel from './UserPageBooksPanel'
import ChapterTabs from './UserPageChapterTabs'
// import WatsonTone from './WatsonTone'
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
    handleTestClick = () => {
        const { store } = this.context;
        // store.dispatch(writeInChapter())
        // store.getState()
        console.log(store.getState())
    }


    render() {

        const { visible } = this.state

        return (
            <div>
                <Sidebar.Pushable as={Segment} >
                    <Sidebar as={Menu} animation='scale down' visible={visible} icon='labeled' vertical >
                        <BooksPanel />
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment>
                            <Button animated basic onClick={this.toggleVisibility}>
                                <Button.Content visible>Menu</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='left arrow' />
                                </Button.Content>
                            </Button>

                            <ChapterTabs />
                        </Segment>
                    </Sidebar.Pusher>

                </Sidebar.Pushable>
            </div>
        )
    }
}
UserPage.contextTypes = {
    store: React.PropTypes.object
};

                            // <Button basic icon='sidebar' onClick={this.toggleVisibility} />
