import React from 'react';
import styles from './styles.module.css';

interface SelectProps {
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build select component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Select;
