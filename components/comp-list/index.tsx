import React from 'react';
import styles from './styles.module.css';

interface CompListProps {
  className?: string;
}

export const CompList: React.FC<CompListProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build List component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompList;
