import React from 'react';
import styles from './styles.module.css';

interface CompTableProps {
  className?: string;
}

export const CompTable: React.FC<CompTableProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Table component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompTable;
