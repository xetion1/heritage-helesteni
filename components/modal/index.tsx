import React from 'react';
import styles from './styles.module.css';

interface ModalProps {
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build modal component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Modal;
