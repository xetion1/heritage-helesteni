import React from 'react';
import styles from './styles.module.css';

interface CompSliderProps {
  className?: string;
}

export const CompSlider: React.FC<CompSliderProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Slider component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompSlider;
