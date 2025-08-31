import React from 'react';
import styles from './styles.module.css';

interface Comp360ViewerProps {
  className?: string;
}

export const Comp360Viewer: React.FC<Comp360ViewerProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build 360° Image Viewer</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Comp360Viewer;
