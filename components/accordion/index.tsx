import React from 'react';
import styles from './styles.module.css';

interface AccordionProps {
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build accordion component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Accordion;
