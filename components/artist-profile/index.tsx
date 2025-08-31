import React from 'react';
import styles from './styles.module.css';

interface ArtistProfileProps {
  className?: string;
}

export const ArtistProfile: React.FC<ArtistProfileProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build artist-profile component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default ArtistProfile;
