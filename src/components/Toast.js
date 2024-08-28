// src/Toast.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// Styled components for Toast
const ToastContainer = styled.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  top: ${({ position }) => (position.includes('top') ? '20px' : 'auto')};
  bottom: ${({ position }) => (position.includes('bottom') ? '20px' : 'auto')};
  left: ${({ position }) => (position.includes('left') ? '20px' : 'auto')};
  right: ${({ position }) => (position.includes('right') ? '20px' : 'auto')};
`;

const ToastMessage = styled.div`
  background-color: ${({ type }) => {
    switch (type) {
      case 'error':
        return '#f44336';
      case 'info':
        return '#2196F3';
      case 'warning':
        return '#ff9800';
      case 'success':
        return '#4CAF50';
      default:
        return '#333';
    }
  }};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
`;

const ToastIcon = styled.div`
  margin-right: 10px;
`;

const Toast = ({ message, type, position, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  return ReactDOM.createPortal(
    <ToastContainer position={position}>
      <ToastMessage type={type}>
        <ToastIcon>
          {/* Add icons based on type if needed */}
        </ToastIcon>
        {message}
      </ToastMessage>
    </ToastContainer>,
    document.body
  );
};

export default Toast;
