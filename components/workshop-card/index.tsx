import React from 'react';
import styles from './styles.module.css';

interface WorkshopCardProps {
  className?: string;
}

export const WorkshopCard: React.FC<WorkshopCardProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build workshop-card component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default WorkshopCard;
