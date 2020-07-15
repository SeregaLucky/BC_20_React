import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

// console.log('rootReducer', rootReducer);

const todo = [
  {
    id: '99990',
    text: 'To do ZERO',
  },
  {
    id: '99991',
    text: 'To do 222',
  },
  {
    id: '99992',
    text: 'To do 333',
  },
];

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  { todoRoot: { todo } },
  composeWithDevTools(applyMiddleware(...middleware)),
);

// const aaa = store => next => action => {
//   cxcsdsddsxccx
// }
