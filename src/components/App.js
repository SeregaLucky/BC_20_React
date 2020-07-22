import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from '../pages/MainPage/MainPage';
import FormPage from '../pages/FormPage/FormPage';
import Header from './Header/Header';
import CounterPage from '../pages/CounterPage/CounterPage';
import ModalPage from '../pages/ModalPage/ModalPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/formPage" component={FormPage} />
        <Route path="/counterPage" component={CounterPage} />
        <Route path="/modalPage" component={ModalPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
