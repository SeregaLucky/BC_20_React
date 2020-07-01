import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from '../routes';

import Header from './Header/Header';
import MainPage from '../pages/MainPage/MainPage';
import FormPage from '../pages/FormPage/FormPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path={routes.MAIN_PAGE} component={MainPage} />
        <Route path={routes.FORM_PAGE} component={FormPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
