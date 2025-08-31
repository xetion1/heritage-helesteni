import React from 'react';
import styles from './styles.module.css';

interface LightboxProps {
  className?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build lightbox component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Lightbox;
