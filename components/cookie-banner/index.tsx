import React from 'react';
import styles from './styles.module.css';

interface CookieBannerProps {
  className?: string;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build cookie-banner component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CookieBanner;
