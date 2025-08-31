import React from 'react';
import styles from './styles.module.css';

interface CompCardEventProps {
  className?: string;
}

export const CompCardEvent: React.FC<CompCardEventProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Event Card</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompCardEvent;
