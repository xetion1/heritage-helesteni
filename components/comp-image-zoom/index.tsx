import React from 'react';
import styles from './styles.module.css';

interface CompImageZoomProps {
  className?: string;
}

export const CompImageZoom: React.FC<CompImageZoomProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Image Zoom</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompImageZoom;
