import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import routes from '../routes';

import Header from '../components/Header/Header';
import MainPage from '../pages/MainPage/MainPage';
import Contacts from '../pages/Contacts/Contacts';
import OnePage from '../pages/OnePage/OnePage';
import PeoplePage from '../pages/People/People';

// import PeopleItem from '../components/PeopleItem/PeopleItem';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path={routes.MAIN_PAGE} component={MainPage} />
        <Route path={routes.ONE_PAGE} component={OnePage} />
        <Route path={routes.CONTACT_PAGE} component={Contacts} />

        <Route path={`${routes.PEOPLE_PAGE}:peopleID`} component={PeopleItem} />
        {/* Делаем запрос за рандомными цыфрами в момент загрузки компонента */}
        <Route path={routes.PEOPLE_PAGE} component={PeoplePage} />

        <Redirect to={routes.MAIN_PAGE} />
      </Switch>

      <footer>FOOTER</footer>
    </BrowserRouter>
  );
};

export default App;
