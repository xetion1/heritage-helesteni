import React from 'react';
import styles from './styles.module.css';

interface CompBackToTopProps {
  className?: string;
}

export const CompBackToTop: React.FC<CompBackToTopProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Back to Top button</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompBackToTop;
