import React from 'react';
import styles from './styles.module.css';

interface RatingProps {
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build rating component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Rating;
