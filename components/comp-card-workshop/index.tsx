import React from 'react';
import styles from './styles.module.css';

interface CompCardWorkshopProps {
  className?: string;
}

export const CompCardWorkshop: React.FC<CompCardWorkshopProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Workshop Card</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompCardWorkshop;
