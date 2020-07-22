import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';

const ModalPage = () => {
  const [isShowModal, changeIsShowModal] = useState(false);

  const showModal = () => changeIsShowModal(true);
  const closeModal = () => changeIsShowModal(false);

  return (
    <>
      <button type="button" onClick={showModal}>
        Show Modal
      </button>

      {isShowModal && <Modal closeModal={closeModal} />}
    </>
  );
};

export default ModalPage;
