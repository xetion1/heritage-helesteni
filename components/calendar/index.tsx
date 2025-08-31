import React from 'react';
import styles from './styles.module.css';

interface CalendarProps {
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build calendar component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Calendar;
