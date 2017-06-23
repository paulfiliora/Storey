import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class Footer extends Component {

    render() {

        return (
            <Menu>
                <div>
                    <br /><br />
                    <Segment inverted attached>
                        <Grid >
                            <Grid.Column width={4}>
                                <Menu inverted fluid vertical >
                                    <Menu.Item name='ScriptUp' />
                                    <Menu.Item href='https://github.com/pfiliora/ScriptUp' target='_blank' name='Github' />
                                    <Menu.Item href='https://pfiliora.github.io/Filiora_Website/' target='_blank' name='Portfolio' />
                                    <Menu.Item href='https://github.com/pfiliora/ScriptUp' target='_blank' name='LinkedIn' />
                                </Menu>
                            </Grid.Column>
                            <Grid.Column stretched width={12}>
                                <Segment size='large' inverted>
                                    This is an early proof of concept for a site that fosters collaborative learning and working through problems together. Sometimes the journey to the answer as well as being able to explain the solution to others, have the greatest learning rewards!
                        </Segment>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </div>
            </Menu>
        )
    }
}

// export const Footer = () => {
// }