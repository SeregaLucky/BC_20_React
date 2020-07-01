import React from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';
import withModal from '../../hoc/withModal';

const ROOT_MODUL = document.querySelector('#root-modal');

const Modal = ({ closeModal, text }) => {
  return createPortal(
    <div className={styles.overlay}>
      <div>{text}</div>

      <button onClick={closeModal}>CLOSE</button>
    </div>,
    ROOT_MODUL,
  );
};

export default withModal(Modal);
