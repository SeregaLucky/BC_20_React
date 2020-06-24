import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName={styles.activeLink}>
                Main
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" activeClassName={styles.activeLink}>
                Contacnts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
