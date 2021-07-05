import React, { useEffect, useReducer } from 'react';
import { SET, OFF, VARIANT } from './types';
import Toast from '../Toast';

import ToastContext from './ToastContext';
import ToastReducer from './ToastReducer';

const ToastState = props => {
  const initialState = {
    message: '',
    show: false,
    variant: 'error',
  };

  const [state, dispatch] = useReducer(ToastReducer, initialState);

  const setToast = async _toast => {
    // if (_toast.message instanceof Array) {
    //   let _message = '';
    //   _toast.message.forEach(err => (_message += `/ ${err}`));
    //   dispatch({ type: VARIANT, payload: _toast.variant });
    //   return dispatch({ type: SET, payload: _message });
    // }
    if (state.show) {
      return setTimeout(() => {
        dispatch({ type: VARIANT, payload: _toast.variant });
        dispatch({ type: SET, payload: _toast.message });
      }, 4000);
    }
    dispatch({ type: VARIANT, payload: _toast.variant });
    dispatch({ type: SET, payload: _toast.message });
  };

  const offToast = () => {
    dispatch({ type: OFF });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      offToast();
    }, 6000);

    return () => {
      clearTimeout(id);
    };
  }, [state.show]);

  return (
    <ToastContext.Provider
      value={{
        message: state.message,
        show: state.show,
        variant: state.variant,
        setToast,
        offToast,
      }}
    >
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastState;
