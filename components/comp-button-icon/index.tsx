import React from 'react';
import styles from './styles.module.css';

interface CompButtonIconProps {
  className?: string;
}

export const CompButtonIcon: React.FC<CompButtonIconProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Icon Button variant</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompButtonIcon;
