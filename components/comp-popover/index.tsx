import React from 'react';
import styles from './styles.module.css';

interface CompPopoverProps {
  className?: string;
}

export const CompPopover: React.FC<CompPopoverProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Popover component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompPopover;
