import React from 'react';
import styles from './styles.module.css';

interface InputProps {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build input component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Input;
