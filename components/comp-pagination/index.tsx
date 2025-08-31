import React from 'react';
import styles from './styles.module.css';

interface CompPaginationProps {
  className?: string;
}

export const CompPagination: React.FC<CompPaginationProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Pagination component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompPagination;
