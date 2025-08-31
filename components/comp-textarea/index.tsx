import React from 'react';
import styles from './styles.module.css';

interface CompTextareaProps {
  className?: string;
}

export const CompTextarea: React.FC<CompTextareaProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Textarea component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompTextarea;
