import React from 'react';
import styles from './styles.module.css';

interface CompCardMuseumProps {
  className?: string;
}

export const CompCardMuseum: React.FC<CompCardMuseumProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Museum Card</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompCardMuseum;
