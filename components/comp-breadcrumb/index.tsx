import React from 'react';
import styles from './styles.module.css';

interface CompBreadcrumbProps {
  className?: string;
}

export const CompBreadcrumb: React.FC<CompBreadcrumbProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Breadcrumb component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompBreadcrumb;
