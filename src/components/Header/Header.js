import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

import routes from '../../routes';

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to={routes.TODO_PAGE}>ToDo</NavLink>
          </li>

          <li className={styles.item}>
            <NavLink to={routes.FORM_PAGE}>Form</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
