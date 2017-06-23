import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk';

import App from './components/App'
import configureStore from './tools/configureStore'
import './index.css';

const store = configureStore()

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)