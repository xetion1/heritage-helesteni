import React from 'react';
import styles from './styles.module.css';

interface TooltipProps {
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build tooltip component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Tooltip;
