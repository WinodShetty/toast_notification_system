// src/ToastManager.js
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Toast from './Toast';

const ToastManager = forwardRef((_, ref) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info', position = 'top-right', delay = 3000) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, message, type, position, delay }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  useImperativeHandle(ref, () => ({
    addToast
  }));

  return (
    <>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          position={toast.position}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
});

export default ToastManager;
