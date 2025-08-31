import React from 'react';
import styles from './styles.module.css';

interface CompModalConfirmProps {
  className?: string;
}

export const CompModalConfirm: React.FC<CompModalConfirmProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Confirm Modal</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompModalConfirm;
