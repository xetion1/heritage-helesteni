import React from 'react';
import styles from './styles.module.css';

interface CompTabsProps {
  className?: string;
}

export const CompTabs: React.FC<CompTabsProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Tabs component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompTabs;
