// src/ToastContext.js
import React, { createContext, useContext, useRef,  } from 'react';
import ToastManager from './ToastManager';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const toastManagerRef = useRef(null);

  const addToast = (message, type = 'info', position = 'top-right', delay = 3000) => {
    if (toastManagerRef.current) {
      toastManagerRef.current.addToast(message, type, position, delay);
    }
  };

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <ToastManager ref={toastManagerRef} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
