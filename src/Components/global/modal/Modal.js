import React from 'react';
import Modal from '@material-ui/core/Modal';
import { useContext } from 'react';

import ModalContext from './context/ModalContext';

const Dialog = ({ children }) => {
  const { dialogShow, offShowDialog } = useContext(ModalContext);

  return (
    <Modal
      className='top-10 relative flex flex-col justify-center items-center'
      open={dialogShow}
      onClose={offShowDialog}
    >
      <div className='w-11/12 h-3/5 py-8 rounded-2xl overflow-y-scroll shadow-2xl px-5 dark:bg-blacks-dark'>
        {children}
      </div>
    </Modal>
  );
};

export default Dialog;
