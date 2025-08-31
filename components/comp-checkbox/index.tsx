import React from 'react';
import styles from './styles.module.css';

interface CompCheckboxProps {
  className?: string;
}

export const CompCheckbox: React.FC<CompCheckboxProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Checkbox component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompCheckbox;
