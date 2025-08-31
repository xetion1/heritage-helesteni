import React from 'react';
import styles from './styles.module.css';

interface CompHeaderStickyProps {
  className?: string;
}

export const CompHeaderSticky: React.FC<CompHeaderStickyProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Sticky Header variant</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompHeaderSticky;
