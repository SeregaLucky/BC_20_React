import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import ContactsAdress from '../../components/ContactsAdress/ContactsAdress';
import ContactsInfo from '../../components/ContactsInfo/ContactsInfo';

import routes from '../../routes';

const Contacts = ({ history, location, match }) => {
  console.log('location', location);
  // console.log('location.pathname', location.pathname);
  // console.log('match', match);

  // console.log(match.path === location.pathname);

  return (
    <main>
      <h2>Contacts</h2>

      <ul>
        <li>
          <NavLink exact to={`${match.path}/1`}>
            ContactsAdress
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.path}/2`}>ContactsInfo</NavLink>
        </li>
        {/* <li>
          <NavLink to={`/contact/2`}>ContactsInfo</NavLink>
        </li> */}
      </ul>

      <Switch>
        {/* <Route path={`${location.pathname}`} component={ContactsAdress} />
        <Route path={`${location.pathname}`} component={ContactsInfo} /> */}

        {/* <Route
          path={`/contact/1`}
          render={props => <ContactsInfo {...props} id={555} />}
        />
        <Route
          path={`/contact/2`}
          render={props => <ContactsInfo {...props} id={777} />}
        />
      </Switch> */}

        <Route
          path={`${routes.CONTACT_PAGE}/${1}`}
          render={props => <ContactsInfo {...props} id={555} />}
        />
        <Route
          path={`${routes.CONTACT_PAGE}/${2}`}
          render={props => <ContactsInfo {...props} id={777} />}
        />
      </Switch>
    </main>
  );
};

export default Contacts;
