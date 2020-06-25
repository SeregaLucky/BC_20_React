import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import routes from '../../routes';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                exact
                to={routes.MAIN_PAGE}
                activeClassName={styles.activeLink}
              >
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.CONTACT_PAGE}
                activeClassName={styles.activeLink}
              >
                Contacnts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.PEOPLE_PAGE}
                activeClassName={styles.activeLink}
              >
                People
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
