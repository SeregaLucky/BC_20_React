import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import UserProfile from '../pages/UserProfile/UserProfile';
import AuthPage from '../pages/AuthPage/AuthPage';
import Header from '../components/Header/Header';

import PrivetRoute from '../servises/PrivetRoute';

const App = () => {
  // console.log(token);
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/userProfile" component={UserProfile} /> */}
        <PrivetRoute path="/userProfile" component={UserProfile} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
