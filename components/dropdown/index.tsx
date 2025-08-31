import React from 'react';
import styles from './styles.module.css';

interface DropdownProps {
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build dropdown component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Dropdown;
