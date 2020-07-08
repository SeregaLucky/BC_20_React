import { createStore } from 'redux';

import rootReducer from './rootReducer';

console.log('rootReducer', rootReducer);

const todo = [
  {
    id: 1,
    text: 'To do ZERO',
  },
  {
    id: 2,
    text: 'To do 222',
  },
  {
    id: 3,
    text: 'To do 333',
  },
];

export const store = createStore(
  rootReducer,
  { todoRoot: { todo } },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// const aaa = store => next => action => {
//   cxcsdsddsxccx
// }
