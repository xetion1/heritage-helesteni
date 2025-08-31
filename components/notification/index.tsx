import React from 'react';
import styles from './styles.module.css';

interface NotificationProps {
  className?: string;
}

export const Notification: React.FC<NotificationProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build notification component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Notification;
