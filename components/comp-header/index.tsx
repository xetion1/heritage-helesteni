import React from 'react';
import styles from './styles.module.css';

interface CompHeaderProps {
  className?: string;
}

export const CompHeader: React.FC<CompHeaderProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Header component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompHeader;
