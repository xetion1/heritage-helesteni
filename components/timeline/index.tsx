import React from 'react';
import styles from './styles.module.css';

interface TimelineProps {
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build timeline component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Timeline;
