import React from 'react';
import styles from './styles.module.css';

interface CompCardProps {
  className?: string;
}

export const CompCard: React.FC<CompCardProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Card component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompCard;
