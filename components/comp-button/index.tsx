import React from 'react';
import styles from './styles.module.css';

interface CompButtonProps {
  className?: string;
}

export const CompButton: React.FC<CompButtonProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Button component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompButton;
