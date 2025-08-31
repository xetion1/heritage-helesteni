import React from 'react';
import styles from './styles.module.css';

interface CompButtonPrimaryProps {
  className?: string;
}

export const CompButtonPrimary: React.FC<CompButtonPrimaryProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Primary Button variant</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompButtonPrimary;
