import React from 'react';
import styles from './styles.module.css';

interface TabsProps {
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build tabs component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Tabs;
