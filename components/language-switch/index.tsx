import React from 'react';
import styles from './styles.module.css';

interface LanguageSwitchProps {
  className?: string;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build language-switch component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default LanguageSwitch;
