import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import MainInfo from '../../components/MainInfo/MainInfo';

import routes from '../../routes';

const MainPage = props => {
  console.log('MainPage', props);

  return (
    <main>
      <h2>MainPage</h2>

      {/* <MainInfo {...props} /> */}
      <MainInfo />

      <ul>
        <li>
          {/* <NavLink to="/onePage">onePage</NavLink> */}

          <NavLink
            to={{
              pathname: routes.ONE_PAGE,
              state: { from: props.location },
            }}
          >
            onePage
          </NavLink>
        </li>
      </ul>
    </main>
  );
};

export default MainPage;
