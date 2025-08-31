import React from 'react';
import styles from './styles.module.css';

interface SortProps {
  className?: string;
}

export const Sort: React.FC<SortProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build sort component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Sort;
