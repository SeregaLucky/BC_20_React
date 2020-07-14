import React from 'react';
import ReactDOM from 'react-dom';
// import api from './servises/api';

import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';

import { store } from './redux/store';
console.log('store', store);
// console.log('store getState', store.getState());

// api.getAllTodo().then(data => console.log('data', data));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
