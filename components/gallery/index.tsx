import React from 'react';
import styles from './styles.module.css';

interface GalleryProps {
  className?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build gallery component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Gallery;
