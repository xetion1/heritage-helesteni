import React from 'react';
import styles from './styles.module.css';

interface CompToastProps {
  className?: string;
}

export const CompToast: React.FC<CompToastProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Toast component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompToast;
