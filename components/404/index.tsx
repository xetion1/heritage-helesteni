import React from 'react';
import styles from './styles.module.css';

interface 404Props {
  className?: string;
}

export const 404: React.FC<404Props> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build 404 component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default 404;
