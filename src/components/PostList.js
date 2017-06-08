import React from 'react'
import { Grid, Segment, Table, Icon, Label, Menu } from 'semantic-ui-react'

const GridExampleEqualWidthColumn = () => (
    <Grid columns='equal'>
        <Grid.Column>
            <Segment>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Weekly Featured</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Label ribbon>Most Upvoted!</Label> [CSS, JS] Interactive Loader
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>[JS] For Each Loop</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>[CSS] Rain Effects</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </Segment>
        </Grid.Column>
        <Grid.Column width={11}>
            <Segment>
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell>Language</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Loaders</Table.Cell>
                            <Table.Cell>CSS</Table.Cell>
                            <Table.Cell>
                                [CSS Animation] AI Loader<br />
                                Quick loader for apps inspired by electrons moving<br />
                                by SnipUserPaul<br />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Gallery</Table.Cell>
                            <Table.Cell>CSS, JS</Table.Cell>
                            <Table.Cell>
                                [Carousel] Spinster Wheel<br />
                                Animated 3D Gallery<br />
                                by Taqtastic<br />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='left chevron' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>...</Menu.Item>
                                    <Menu.Item as='a'>5</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='right chevron' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Segment>
        </Grid.Column>
    </Grid>
)

export default GridExampleEqualWidthColumn


