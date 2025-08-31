import React from 'react';
import styles from './styles.module.css';

interface ErrorProps {
  className?: string;
}

export const Error: React.FC<ErrorProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build error component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Error;
