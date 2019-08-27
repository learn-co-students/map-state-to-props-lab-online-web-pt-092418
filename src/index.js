import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import manageUsers from './reducers/manageUsers'
import { Provider } from 'react-redux';
const store = createStore(
  manageUsers
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_()
);
// add imports and code


ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>
  ,
  document.getElementById('root')
);
