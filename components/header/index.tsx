import React from 'react';
import styles from './styles.module.css';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build header component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Header;
