import React from 'react';
import styles from './styles.module.css';

interface CompTableSortableProps {
  className?: string;
}

export const CompTableSortable: React.FC<CompTableSortableProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Sortable Table</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompTableSortable;
