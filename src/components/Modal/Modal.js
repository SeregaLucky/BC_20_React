import React, { createRef, useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ closeModal }) => {
  const handleKeydown = e => {
    console.log(e.code);

    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleClickModal = e => {
    console.log(e.target);

    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  const modalRef = createRef();

  const modalRef222 = createRef();
  modalRef222.current = 777;
  console.log(modalRef222);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    console.log(modalRef);
    modalRef.current.addEventListener('click', handleClickModal);

    // отрабатывает перед каждым useEffect начиная со второго но у нас только при размонитровнии
    return () => {
      window.removeEventListener('keydown', handleKeydown);
      modalRef.current.removeEventListener('click', handleClickModal);
    };
  }, []);

  return (
    <div ref={modalRef} className={styles.overlay}>
      <div className={styles.mainInfo}>
        <h3>Modal</h3>

        <button type="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
