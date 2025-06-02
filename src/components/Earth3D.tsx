
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
          
          @keyframes softGlow {
            0%, 100% {
              text-shadow: 
                0 0 10px #fef08a,
                0 0 20px #facc15,
                0 0 30px #eab308;
            }
            50% {
              text-shadow: 
                0 0 15px #fef08a,
                0 0 25px #facc15,
                0 0 35px #eab308;
            }
          }
        `}
      </style>
      <h1 
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center max-w-full break-words"
        style={{
          color: '#fef08a',
          animation: 'softGlow 3s ease-in-out infinite',
          fontWeight: '700',
          letterSpacing: '1px'
        }}
      >
        {text}
        <span className="animate-pulse" style={{ color: '#fef08a' }}>|</span>
      </h1>
    </div>
  );
};

export default Earth3D;
