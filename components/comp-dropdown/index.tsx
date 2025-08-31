import React from 'react';
import styles from './styles.module.css';

interface CompDropdownProps {
  className?: string;
}

export const CompDropdown: React.FC<CompDropdownProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Dropdown component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompDropdown;
