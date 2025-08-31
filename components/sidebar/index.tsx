import React from 'react';
import styles from './styles.module.css';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build sidebar component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Sidebar;
