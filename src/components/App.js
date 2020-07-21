import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from '../pages/MainPage/MainPage';
import FormPage from '../pages/FormPage/FormPage';
import Header from './Header/Header';
import CounterPage from '../pages/CounterPage/CounterPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/formPage" component={FormPage} />
        <Route path="/counterPage" component={CounterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
