import React from 'react';
import styles from './styles.module.css';

interface BreadcrumbProps {
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build breadcrumb component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Breadcrumb;
