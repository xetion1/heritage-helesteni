import React from 'react';
import styles from './styles.module.css';

interface CompNotificationProps {
  className?: string;
}

export const CompNotification: React.FC<CompNotificationProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Notification component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompNotification;
