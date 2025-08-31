import React from 'react';
import styles from './styles.module.css';

interface CompInputSearchProps {
  className?: string;
}

export const CompInputSearch: React.FC<CompInputSearchProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Search Input</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompInputSearch;
