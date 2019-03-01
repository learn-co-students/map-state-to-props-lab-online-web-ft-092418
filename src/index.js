import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageUsers from './reducers/manageUsers.js';
import App from './App'



// add imports and code
const store = createStore(manageUsers);

ReactDOM.render(
  // add imports and code
  // add imports and code
  <Provider store={store}>
  
  <App />
  </Provider>,
  document.getElementById('root')
);
