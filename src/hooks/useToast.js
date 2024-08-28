import { useContext } from 'react';
import { ToastContext } from '../components/ToastProvider';

const useToast = () => {
  const { addToast } = useContext(ToastContext);
  return addToast;
};

export default useToast;
