import React from 'react';
import styles from './styles.module.css';

interface CompAccordionProps {
  className?: string;
}

export const CompAccordion: React.FC<CompAccordionProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build Accordion component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default CompAccordion;
