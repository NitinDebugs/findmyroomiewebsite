
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
    <div className="h-[400px] w-full flex items-center justify-center">
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
        className="text-4xl md:text-5xl font-bold"
        style={{
          background: 'linear-gradient(90deg, #8B5CF6, #1EAEDB, #33C3F0, #8B5CF6)',
          backgroundSize: '400% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'rotate 8s linear infinite'
        }}
      >
        {text}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
};

export default Earth3D;
