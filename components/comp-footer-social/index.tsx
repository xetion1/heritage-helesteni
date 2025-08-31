import React from 'react';
import styles from './styles.module.css';

interface CompFooterSocialProps {
  className?: string;
}

export const CompFooterSocial: React.FC<CompFooterSocialProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Footer Social links</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompFooterSocial;
