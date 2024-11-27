import React, { useRef } from 'react';
import './Third.css';

const Third: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // TypeScript ref
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false); // State to manage playback

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute the video
      videoRef.current.play(); // Start playing the video
      setIsPlaying(true); // Update state to reflect that video is playing
    }
  };

  return (
    <div className="th-main-section">
      {/* Background video */}
      <video
        src="/cards.webm" // Background video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Foreground video */}
      <div className="sir-qasim-video">
        <video
          ref={videoRef}
          src="/qasim.mp4" // Your original video
          playsInline // For better autoplay support on mobile devices
          className="qasim-video-player"
          controls
        ></video>
      </div>

      <div className="sir-qasim-intro">
        <h1>Master the art of Generative AI <br /> with Muhammad Qasim</h1>
        <p>
          Sir Qasim is a leader in AI and data science, currently serving as 
          the Chief Data Scientist at Cancer Clarity LLC and 
          the Head of Generative AI at PIAIC. With expertise in Generative AI,
          Deep Learning, and Large Language Models, 
          he is driving innovation and AI education in Pakistan. 
          Skilled in advanced frameworks and technologies, 
          he passionate about creating impactful, AI-powered solutions.
        </p>
        {!isPlaying && (
          <button onClick={handlePlayClick} className="play-button">
            Play Video
          </button>
        )}

        
      </div>
      
    </div>
  );
};

export default Third;
