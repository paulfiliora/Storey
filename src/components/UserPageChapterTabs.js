import React, { Component } from 'react'
import { Input, Menu, Segment, Header, Form, TextArea, Button, Progress, Grid } from 'semantic-ui-react'
import ToneAnalyzerV3 from 'watson-developer-cloud/tone-analyzer/v3'

export default class ChapterTabs extends Component {
    state = { activeItem: '1. Intro' }

    componentDidMount() {
        // console.log(ToneAnalyzerV3)
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleAnalyzerClick(e) {
        e.preventDefault();
        var tone_analyzer = new ToneAnalyzerV3({
            username: 'f26ec927-b4a8-4020-aaac-fcdf8df4df6e',
            password: 'V1FYHUEY6aPa',
            version_date: '2016-05-19'
        });

        tone_analyzer.tone({ text: 'Greetings from Watson Developer Cloud!' },
            function (err, tone) {
                if (err)
                    console.log('Tone Error:  ' + err);
                else
                    console.log(JSON.stringify(tone, null, 2));
            });
    }

    render() {
        const chapter1 = `"Imagine a school in a castle filled with moving staircases, a sport played on flying broomsticks, an evil wizard intent on domination, an ordinary boy who’s the hero of a whole world he doesn’t know. This is the story that comes to life in the marvelous Harry Potter series by J. K. Rowling.

The Dark Lord, Voldemort, tried to murder Harry when he was just a baby—but he failed, killing Harry’s parents but leaving him with a lightning-bolt scar. After Voldemort’s disappearance, Harry is sent to live with his nasty aunt and uncle, far away from any hint of magic. But at the age of eleven, he is invited to attend Hogwarts School of Witchcraft and Wizardry, and a magical world opens before him.

Each of the seven books in the series chronicles one year in Harry’s adventures at Hogwarts and his battle against Lord Voldemort. Harry makes two marvelous best friends named Ron Weasley and Hermione Granger. He studies topics like Transfiguration and Potions under wise headmaster Albus Dumbledore and the malevolent Severus Snape. He becomes expert at a game called Quidditch; encounters incredible creatures like phoenixes and dragons; and discovers an entire Wizarding universe hidden just out of sight, as prone to the darker aspects of human experience as our own, but brightened by a quirky original magic.
And slowly, Harry unravels the mysteries of his original confrontation with Voldemort: why the Dark Lord tried to kill him, how he lived… and what he must do to survive another encounter.

The first Harry Potter book, Harry Potter and the Sorcerer's Stone, was published in the United Kingdom in 1997; a decade later, the last novel, Harry Potter and the Deathly Hallows, broke all records to become the fastest-selling book in history. The seven novels have been translated into sixty-eight languages, selling over four hundred million copies in more than two hundred countries."`

        const { activeItem } = this.state

        return (
            <div><br />
                <Header floated='left'>Parry Hotter</Header>
                <Menu attached='top' tabular>
                    <Menu.Item name='1. Intro' active={activeItem === '1. Intro'} onClick={this.handleItemClick} />
                    <Menu.Item name='2. The Wildfire' active={activeItem === '2. The Wildfire'} onClick={this.handleItemClick} />
                    <Menu.Item name='3. Bad Juju' active={activeItem === '3. Bad Juju'} onClick={this.handleItemClick} />

                    <Menu.Item>
                        <Button basic circular icon='plus' />
                        <Button basic circular icon='search' onClick={this.handleAnalyzerClick} />

                    </Menu.Item>
                </Menu>
                <Segment attached='bottom'>
                    <Form>
                        <TextArea placeholder='Try adding multiple lines' autoHeight value={chapter1} />
                    </Form>
                </Segment>
            </div >
        )
    }
}
