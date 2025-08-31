import React from 'react';
import styles from './styles.module.css';

interface PaginationProps {
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build pagination component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Pagination;
