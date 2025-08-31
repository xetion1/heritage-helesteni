import React from 'react';
import styles from './styles.module.css';

interface AudioPlayerProps {
  className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build audio-player component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default AudioPlayer;
