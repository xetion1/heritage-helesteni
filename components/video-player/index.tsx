import React from 'react';
import styles from './styles.module.css';

interface VideoPlayerProps {
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build video-player component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default VideoPlayer;
