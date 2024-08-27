import React, { createContext, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import Toast from './Toast';
import ToastContainer from './styles/ToastContainer';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info', duration = 3000) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, message, type }]);

    setTimeout(() => {
      setToasts(toasts.filter(toast => toast.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {createPortal(
        <ToastContainer>
          {toasts.map(toast => (
            <Toast key={toast.id} type={toast.type}>
              {toast.message}
            </Toast>
          ))}
        </ToastContainer>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
