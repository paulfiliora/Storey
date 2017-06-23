import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

export default class BooksPanel extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item>
          Home

          <Menu.Menu>
            <Menu.Item name='Tools' active={activeItem === 'Tools'} onClick={this.handleItemClick}>
              Character Tools
            </Menu.Item>
            <Menu.Item name='Features' active={activeItem === 'Features'} onClick={this.handleItemClick}>
              Features
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Header>
          <Icon name='book' />
          Books</Menu.Header>
        <Menu.Item name='book1' active={activeItem === 'book1'} onClick={this.handleItemClick}>
          Parry Hotter
        </Menu.Item>
        <Menu.Item name='book2' active={activeItem === 'book2'} onClick={this.handleItemClick}>
          The Silence
        </Menu.Item>
      </Menu>
    )
  }
}