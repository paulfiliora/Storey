import React, { Component } from 'react'
import { Button, Dropdown, Menu, Modal, Container } from 'semantic-ui-react'
import LoginForm from './Login.js'

export default class NavBar extends Component {

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;

    return (
      <Menu attached borderless={true}>
        <Container>
          <Menu secondary borderless={true} size='tiny'>

            <Menu.Item position='right'>
              <Modal trigger={<Button primary>My Account</Button>} closeIcon='close'>
                <LoginForm store={store} />
              </Modal>
            </Menu.Item>

            <Menu.Item name='Storey' href='/' />
            <Menu.Item name='About' href='/' />

          </Menu>
        </Container>
      </Menu>
    )
  }
}

NavBar.contextTypes = {
  store: React.PropTypes.object
};
// 
// const FixedMenu = () => (
//   <Menu fixed='top' size='large'>
//     <Container>
//       <Menu.Item as='a' active>Home</Menu.Item>
//       <Menu.Item as='a'>Work</Menu.Item>
//       <Menu.Item as='a'>Company</Menu.Item>
//       <Menu.Item as='a'>Careers</Menu.Item>
//       <Menu.Menu position='right'>
//         <Menu.Item className='item'>
//           <Button as='a'>Log in</Button>
//         </Menu.Item>
//         <Menu.Item>
//           <Button as='a' primary>Sign Up</Button>
//         </Menu.Item>
//       </Menu.Menu>
//     </Container>
//   </Menu>
// )
