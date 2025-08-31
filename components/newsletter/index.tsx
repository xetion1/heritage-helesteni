import React from 'react';
import styles from './styles.module.css';

interface NewsletterProps {
  className?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build newsletter component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Newsletter;
