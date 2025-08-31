import React from 'react';
import styles from './styles.module.css';

interface CompInputProps {
  className?: string;
}

export const CompInput: React.FC<CompInputProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Input component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompInput;
