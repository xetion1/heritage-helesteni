import React from 'react';
import styles from './styles.module.css';

interface ReviewProps {
  className?: string;
}

export const Review: React.FC<ReviewProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build review component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Review;
