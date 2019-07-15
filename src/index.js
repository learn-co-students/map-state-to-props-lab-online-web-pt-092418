import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App'

import manageUsers from './reducers/manageUsers'

// create a store
const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  // passing store as a prop to the Provider.
  // This will give your components access to the store.
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
