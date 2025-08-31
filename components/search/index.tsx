import React from 'react';
import styles from './styles.module.css';

interface SearchProps {
  className?: string;
}

export const Search: React.FC<SearchProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build search component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default Search;
