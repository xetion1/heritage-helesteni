import React from 'react';
import styles from './styles.module.css';

interface CompRadioProps {
  className?: string;
}

export const CompRadio: React.FC<CompRadioProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Radio component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompRadio;
