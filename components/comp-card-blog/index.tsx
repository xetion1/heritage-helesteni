import React from 'react';
import styles from './styles.module.css';

interface CompCardBlogProps {
  className?: string;
}

export const CompCardBlog: React.FC<CompCardBlogProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Blog Card</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompCardBlog;
