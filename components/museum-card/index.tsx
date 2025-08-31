import React from 'react';
import styles from './styles.module.css';

interface MuseumCardProps {
  className?: string;
}

export const MuseumCard: React.FC<MuseumCardProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build museum-card component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default MuseumCard;
