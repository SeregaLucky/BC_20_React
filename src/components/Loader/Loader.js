import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.modal}>
      <div>
        <h3>LOADING</h3>
      </div>
    </div>
  );
};

export default Loader;
