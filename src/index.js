import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';

import manageUsers from './reducers/manageUsers'
import {createStore} from "redux";


// add imports and code
const store = createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider> ,
  document.getElementById('root')
);
