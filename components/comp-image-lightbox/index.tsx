import React from 'react';
import styles from './styles.module.css';

interface CompImageLightboxProps {
  className?: string;
}

export const CompImageLightbox: React.FC<CompImageLightboxProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Image Lightbox</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompImageLightbox;
