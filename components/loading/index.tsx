import React from 'react';
import styles from './styles.module.css';

interface LoadingProps {
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build loading component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Loading;
