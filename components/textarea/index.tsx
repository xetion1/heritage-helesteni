import React from 'react';
import styles from './styles.module.css';

interface TextareaProps {
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build textarea component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Textarea;
