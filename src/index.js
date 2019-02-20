import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import manageUsersReducer from './reducers/manageUsers.js'

import manageUsers from './reducers/manageUsers'


// add imports and code
const store = createStore(manageUsersReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
