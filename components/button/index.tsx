import React from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build button component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Button;
