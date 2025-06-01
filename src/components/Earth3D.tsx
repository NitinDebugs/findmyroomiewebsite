
import React, { useEffect, useState } from 'react';

const Earth3D = () => {
  const [text, setText] = useState("");
  const fullText = "Roommate dhundna hua ab easy";
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        index = 0;
        setTimeout(() => {
          // Reset after showing the full text for a moment
          setText("");
        }, 1000);
      }
    }, 150);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="min-h-[150px] h-[25vh] sm:h-[30vh] md:h-[35vh] w-full flex items-center justify-center p-2 sm:px-4 overflow-hidden">
      <style>
        {`
          @keyframes rotate {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
      <h1 
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center max-w-full break-words"
        style={{
          background: 'linear-gradient(90deg, #2d3748, #1a202c, #2b6cb0, #2c5282)',
          backgroundSize: '400% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'rotate 8s linear infinite',
          textShadow: '0 2px 4px rgba(255, 255, 255, 0.3)'
        }}
      >
        {text}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
};

export default Earth3D;
