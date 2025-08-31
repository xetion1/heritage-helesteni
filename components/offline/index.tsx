import React from 'react';
import styles from './styles.module.css';

interface OfflineProps {
  className?: string;
}

export const Offline: React.FC<OfflineProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build offline component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Offline;
