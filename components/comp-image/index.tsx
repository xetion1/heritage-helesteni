import React from 'react';
import styles from './styles.module.css';

interface CompImageProps {
  className?: string;
}

export const CompImage: React.FC<CompImageProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Image component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompImage;
