import React from 'react';
import styles from './styles.module.css';

interface CompDrawerProps {
  className?: string;
}

export const CompDrawer: React.FC<CompDrawerProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Drawer component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompDrawer;
