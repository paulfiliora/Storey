import React, { Component } from 'react'
import { Icon, Input, Menu, Accordion } from 'semantic-ui-react'
import { signOut } from '../actions'

export default class BooksPanel extends Component {
  state = {
    chapters: this.context.store.getState().firebaseDB.books["-KnLjyje2E3iy_1ircEG"].chapters,
    bookName: this.context.store.getState().firebaseDB.books["-KnLjyje2E3iy_1ircEG"].name,
    title: this.context.store.getState().firebaseDB.books["-KnLjyje2E3iy_1ircEG"].chapters["-KnN1rmnHZWll8QQBafy"].title
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogOut = e => {
    const { store } = this.context;
    store.dispatch(signOut());
  }


  render() {
    let { chapters, activeItem, bookName } = this.state
    // console.log(chapters)
    const renderables = Object.keys(chapters).map(chapterContent => {
      const chapterStuff = chapters[chapterContent];
      return <Accordion.Content><p>{chapterStuff.title}</p></Accordion.Content>
    });

    return (
      <Menu vertical>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item onClick={this.handleLogOut}>
          Log Out
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
          <Icon name='book' onClick={this.handleItemClick} />
          Books</Menu.Header>

        <Accordion>
          <Accordion.Title>
            <Icon name='dropdown' />
            {bookName}
          </Accordion.Title>
          {renderables}
        </Accordion>

      </Menu>
    )
  }
}

BooksPanel.contextTypes = {
  store: React.PropTypes.object
};

// active={activeItem === 'book1'}