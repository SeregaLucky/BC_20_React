import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Product</li>
      </ul>
    </nav>
  </header>
);

export default Header;
