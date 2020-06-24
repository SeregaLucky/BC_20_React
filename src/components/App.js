import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/Header/Header';
import MainPage from '../pages/MainPage/MainPage';
import Contacts from '../pages/Contacts/Contacts';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/contacts" component={Contacts} />

        <Redirect to="/" />
      </Switch>

      <footer>FOOTER</footer>
    </BrowserRouter>
  );
};

export default App;
