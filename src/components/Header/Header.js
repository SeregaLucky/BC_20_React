import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              exact
              activeClassName={styles.itemActive}
              to={routes.MAIN_PAGE}
            >
              MainPage
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink activeClassName={styles.itemActive} to={routes.FORM_PAGE}>
              FormPage
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
