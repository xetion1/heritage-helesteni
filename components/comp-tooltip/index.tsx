import React from 'react';
import styles from './styles.module.css';

interface CompTooltipProps {
  className?: string;
}

export const CompTooltip: React.FC<CompTooltipProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Tooltip component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompTooltip;
