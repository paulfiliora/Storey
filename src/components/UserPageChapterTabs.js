import React, { Component } from 'react'
import { Menu, Segment, Header, Form, TextArea, Button, Sidebar } from 'semantic-ui-react'
import { writeInChapter, storeAnalysis } from '../actions'
import WatsonTone from './WatsonTone'


export default class ChapterTabs extends Component {

    state = { activeItem: '1. Intro', bookName: this.context.store.getState().firebaseDB.books["-KnLjyje2E3iy_1ircEG"].name, title: this.context.store.getState().firebaseDB.books["-KnLjyje2E3iy_1ircEG"].chapters["-KnN1rmnHZWll8QQBafy"].title, text: this.context.store.getState().firebaseDB.books["-KnLjyje2E3iy_1ircEG"].chapters["-KnN1rmnHZWll8QQBafy"].text, submittedText: '', visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    componentDidMount() {
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() => this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
        // console.log(this.state.text)
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleSave = e => {
        e.preventDefault()

        const { store } = this.context;

        const { text } = this.state

        this.setState({ submittedText: text })

        store.dispatch(writeInChapter(
            text,
        ));
    }

    handleFullScreen = e => {
        const body = document.querySelector('#transcript');
        body.webkitRequestFullscreen();
    }

    handleAnalyzerClick(e) {
        e.preventDefault();
        const { store } = this.context;
        this.setState({ visible: !this.state.visible })

        // console.log('clicked analyzer')
        // console.log(this.state.text)

        // let text = this.state.text

        const URL = "http://storey.webscript.io/";
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const opts = {
            method: 'POST',
            body: JSON.stringify({
                text: this.state.text,
            }),
            headers: myHeaders,
        }
        return fetch(URL, opts)
            .then(response => Promise.all([response, response.json()]))
            // .then(response => console.log('Final data', response))
            .then(response => store.dispatch(storeAnalysis(response)))
    }

    startDictation() {
        var two_line = /\n\n/g;
        var one_line = /\n/g;
        function linebreak(s) {
            return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
        }
        var first_char = /\S/;
        function capitalize(s) {
            return s.replace(first_char, function (m) { return m.toUpperCase(); });
        }

        if (window.hasOwnProperty('webkitSpeechRecognition')) {

            const recognition = new window.webkitSpeechRecognition();

            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.lang = "en-US";
            recognition.start();

            recognition.onresult = function (e) {
                document.getElementById('transcript').value
                    += linebreak(capitalize(e.results[0][0].transcript))
                recognition.stop();
            };

            recognition.onerror = function (e) {
                recognition.stop();
            }
        }
    }

    render() {
        let chapter1 = this.state.text
        let bookName = this.state.bookName
        let title = this.state.title
        // let chapter1 = store.getState().firebaseDB.books["-KnLjyje2E3iy_1ircEG"].name
        const { activeItem, visible } = this.state

        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='overlay' width='thin' direction='right' visible={visible} icon='labeled' vertical>
                        <WatsonTone />
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header floated='left'>{bookName}</Header>
                            <Menu attached='top' tabular>
                                <Menu.Item name={title} active={activeItem === '1. Intro'} onClick={this.handleItemClick} />
                                {/*<Menu.Item name='2. The Wildfire' active={activeItem === '2. The Wildfire'} onClick={this.handleItemClick} />
                                <Menu.Item name='3. Bad Juju' active={activeItem === '3. Bad Juju'} onClick={this.handleItemClick} />*/}
                                <Menu.Item>
                                    <Button basic circular icon='plus' />
                                    <Button basic circular icon='search' onClick={this.handleAnalyzerClick.bind(this)} />
                                    <Button basic circular icon='microphone' onClick={this.startDictation} />
                                    <Button basic circular icon='maximize' onClick={this.handleFullScreen} />
                                </Menu.Item>
                            </Menu>
                            <Segment attached='bottom'>
                                <Form onSubmit={this.handleSave}>
                                    <TextArea id="transcript" name='text' autoHeight defaultValue={chapter1} onChange={this.handleChange} />
                                    <Button basic icon='save' />
                                </Form>
                            </Segment>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div >
        )
    }
}
ChapterTabs.contextTypes = {
    store: React.PropTypes.object
};