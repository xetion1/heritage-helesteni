import React from 'react';
import styles from './styles.module.css';

interface CompSidebarProps {
  className?: string;
}

export const CompSidebar: React.FC<CompSidebarProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Sidebar component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompSidebar;
