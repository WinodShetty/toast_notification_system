// src/App.js
import React from 'react';
import { ToastProvider, useToast } from './components/ToastContext';

const App = () => {
  const showToast = useToast();

  const handleShowToast = () => {
    showToast('This is a success message!', 'success', 'top-right', 5000);
  };

  return (
    <div>
      <button onClick={handleShowToast}>Show Toast</button>
    </div>
  );
};

const Root = () => (
  <ToastProvider>
    <App />
  </ToastProvider>
);

export default Root;
