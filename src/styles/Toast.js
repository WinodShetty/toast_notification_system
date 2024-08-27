import styled from 'styled-components';

const ToastStyled = styled.div`
  background: ${({ type }) =>
    type === 'error' ? '#f44336' :
    type === 'warning' ? '#ff9800' :
    type === 'info' ? '#2196f3' :
    '#4caf50'};
  color: white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  max-width: 300px;
  width: 100%;
`;

export default ToastStyled;
