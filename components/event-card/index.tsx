import React from 'react';
import styles from './styles.module.css';

interface EventCardProps {
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build event-card component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default EventCard;
