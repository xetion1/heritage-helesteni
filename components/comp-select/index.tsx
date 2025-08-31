import React from 'react';
import styles from './styles.module.css';

interface CompSelectProps {
  className?: string;
}

export const CompSelect: React.FC<CompSelectProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Select component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompSelect;
