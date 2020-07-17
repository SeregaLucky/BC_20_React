import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import { showAction } from '../servises/showAction';

const middleware = [showAction, thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
