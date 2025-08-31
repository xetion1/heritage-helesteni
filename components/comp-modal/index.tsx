import React from 'react';
import styles from './styles.module.css';

interface CompModalProps {
  className?: string;
}

export const CompModal: React.FC<CompModalProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Modal component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompModal;
