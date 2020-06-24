import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import ContactsAdress from '../../components/ContactsAdress/ContactsAdress';
import ContactsInfo from '../../components/ContactsInfo/ContactsInfo';

const Contacts = props => {
  // console.log(props);

  return (
    <main>
      <h2>Contacts</h2>

      <ul>
        <li>
          <NavLink exact to="/contacts/1">
            ContactsAdress
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts/2">ContactsInfo</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/contacts/1" component={ContactsAdress} />
        <Route path="/contacts/2" component={ContactsInfo} />
      </Switch>
    </main>
  );
};

export default Contacts;
