import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink exact to="/" activeClassName={styles.active}>
              Main page
            </NavLink>
          </li>

          <li>
            <NavLink to="/formPage" activeClassName={styles.active}>
              Form page
            </NavLink>
          </li>

          <li>
            <NavLink to="/counterPage" activeClassName={styles.active}>
              Counter page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
