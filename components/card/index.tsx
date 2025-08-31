import React from 'react';
import styles from './styles.module.css';

interface CardProps {
  className?: string;
}

export const Card: React.FC<CardProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build card component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Card;
