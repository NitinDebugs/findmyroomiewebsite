
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
      <h1 
        className="text-4xl md:text-5xl font-bold relative p-8"
        style={{
          background: 'transparent',
          border: '2px solid transparent',
          borderImage: 'linear-gradient(90deg, #8B5CF6, #1EAEDB, #33C3F0, #8B5CF6) 1',
          animation: 'rotate 4s linear infinite',
          WebkitBackgroundClip: 'padding-box'
        }}
      >
        {text}
        <span className="animate-pulse">|</span>
        <style jsx>{`
          @keyframes rotate {
            0% {
              border-image: linear-gradient(0deg, #8B5CF6, #1EAEDB, #33C3F0, #8B5CF6) 1;
            }
            100% {
              border-image: linear-gradient(360deg, #8B5CF6, #1EAEDB, #33C3F0, #8B5CF6) 1;
            }
          }
        `}</style>
      </h1>
    </div>
  );
};

export default Earth3D;

