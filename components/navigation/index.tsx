import React from 'react';
import styles from './styles.module.css';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build navigation component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Navigation;
