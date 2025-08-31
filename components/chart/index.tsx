import React from 'react';
import styles from './styles.module.css';

interface ChartProps {
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build chart component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Chart;
