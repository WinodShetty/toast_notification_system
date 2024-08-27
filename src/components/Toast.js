import React from 'react';
import ToastStyled from './styles/Toast';

const Toast = ({ type, children }) => {
  return <ToastStyled type={type}>{children}</ToastStyled>;
};

export default Toast;
