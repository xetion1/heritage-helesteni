import React from 'react';
import styles from './styles.module.css';

interface CompStepperProps {
  className?: string;
}

export const CompStepper: React.FC<CompStepperProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Stepper component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompStepper;
