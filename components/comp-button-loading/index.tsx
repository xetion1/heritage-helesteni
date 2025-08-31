import React from 'react';
import styles from './styles.module.css';

interface CompButtonLoadingProps {
  className?: string;
}

export const CompButtonLoading: React.FC<CompButtonLoadingProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Loading Button state</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompButtonLoading;
