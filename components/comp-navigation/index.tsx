import React from 'react';
import styles from './styles.module.css';

interface CompNavigationProps {
  className?: string;
}

export const CompNavigation: React.FC<CompNavigationProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Navigation component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompNavigation;
