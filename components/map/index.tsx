import React from 'react';
import styles from './styles.module.css';

interface MapProps {
  className?: string;
}

export const Map: React.FC<MapProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build map component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Map;
