import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import ToDoPageContainer from '../pages/ToDoPage/ToDoPageContainer';
import FormPage from '../pages/FormPage/FormPage';

import routes from '../routes';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path={routes.TODO_PAGE} component={ToDoPageContainer} />
        <Route path={routes.FORM_PAGE} component={FormPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
