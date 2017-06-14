import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { Router, Route, Switch } from 'react-router'

export default class Footer extends Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const { activeItem } = this.state

        return (
            <div>
                <br /><br />
                <Segment inverted attached>
                    <Grid >
                        <Grid.Column width={4}>
                            <Menu inverted fluid vertical >
                                <Menu.Item name='ScriptUp' active={activeItem === 'ScriptUp'} onClick={this.handleItemClick} />
                                <Menu.Item name='Github' active={activeItem === 'Github'} onClick={this.handleItemClick} />
                                <Menu.Item name='Portfolio' active={activeItem === 'Portfolio'} onClick={this.handleItemClick} />
                                <Menu.Item name='LinkedIn' active={activeItem === 'LinkedIn'} onClick={this.handleItemClick} />
                            </Menu>
                        </Grid.Column>
                        <Grid.Column stretched width={12}>
                            <Segment size='big' inverted>
                                This is an early proof of concept for a site that fosters collaborative learning and working through problems together. Sometimes, the journey to the answer, as well as being able to explain the solution process to others, has the greatest learning rewards!
                        </Segment>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
//             <li className={(this.state.activeTabClassName === "tab1") ? "active" : ""}></li>
