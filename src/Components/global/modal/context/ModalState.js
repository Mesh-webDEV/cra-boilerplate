import React, { useEffect, useReducer } from 'react';
import { SET, OFF } from './types';

import ModalContext from './ModalContext';
import ModalReducer from './ModalReducer';

const ModalState = props => {
  const initialState = {
    dialogShow: false,
  };

  const [state, dispatch] = useReducer(ModalReducer, initialState);

  const setShowDialog = () => {
    dispatch({
      type: SET,
    });
  };
  const offShowDialog = () => {
    dispatch({
      type: OFF,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        dialogShow: state.dialogShow,
        setShowDialog,
        offShowDialog,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalState;
