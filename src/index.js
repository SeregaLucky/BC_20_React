import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';

import ContextPositionListTodo from './context/contextPositionListTodo';

ReactDOM.render(
  <ContextPositionListTodo>
    <App />
  </ContextPositionListTodo>,
  document.getElementById('root'),
);
