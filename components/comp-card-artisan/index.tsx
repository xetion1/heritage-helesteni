import React from 'react';
import styles from './styles.module.css';

interface CompCardArtisanProps {
  className?: string;
}

export const CompCardArtisan: React.FC<CompCardArtisanProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Artisan Card</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompCardArtisan;
